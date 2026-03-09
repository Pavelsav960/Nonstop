import puppeteer from 'puppeteer'
import { createServer } from 'http'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, 'dist')

// All city slugs
const citySlugs = [
  'st-louis', 'creve-coeur', 'chesterfield', 'maryland-heights',
  'town-and-country', 'clayton', 'brentwood', 'richmond-heights',
  'university-city', 'ladue', 'kirkwood', 'webster-groves',
  'ballwin', 'manchester', 'des-peres', 'overland',
  'st-ann', 'maplewood', 'shrewsbury', 'frontenac',
]

// All service slugs
const serviceSlugs = [
  'car-lockout', 'house-lockout', 'emergency-locksmith',
  'broken-key-extraction', 'lock-rekey', 'car-key-replacement',
  'key-fob-programming', 'ignition-repair', 'lock-installation-replacement',
  'smart-lock-installation',
]

// All routes to prerender
const routes = [
  '/',
  '/services',
  '/service-areas',
  ...citySlugs.map(slug => `/locksmith/${slug}`),
  ...serviceSlugs.map(slug => `/services/${slug}`),
]

// Simple static file server for the dist folder
function createStaticServer() {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
  }

  return createServer((req, res) => {
    let filePath = join(DIST, req.url === '/' ? 'index.html' : req.url)

    // SPA fallback: if file doesn't exist, serve index.html
    if (!existsSync(filePath)) {
      filePath = join(DIST, 'index.html')
    }

    try {
      const content = readFileSync(filePath)
      const ext = '.' + filePath.split('.').pop()
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/html' })
      res.end(content)
    } catch {
      const content = readFileSync(join(DIST, 'index.html'))
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(content)
    }
  })
}

async function prerender() {
  console.log(`\nPrerendering ${routes.length} routes...\n`)

  const server = createStaticServer()
  await new Promise(resolve => server.listen(4173, resolve))

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  let success = 0
  let failed = 0

  for (const route of routes) {
    try {
      const page = await browser.newPage()

      // Navigate and wait for content to render
      await page.goto(`http://localhost:4173${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      })

      // Wait a bit for React Helmet to inject meta tags
      await page.waitForFunction(() => {
        return document.querySelector('title')?.textContent !== ''
      }, { timeout: 5000 }).catch(() => {})

      // Get the rendered HTML
      let html = await page.content()

      // Ensure proper doctype
      if (!html.startsWith('<!DOCTYPE') && !html.startsWith('<!doctype')) {
        html = '<!DOCTYPE html>' + html
      }

      // Write the HTML to the correct file path
      const outputPath = route === '/'
        ? join(DIST, 'index.html')
        : join(DIST, route, 'index.html')

      const outputDir = dirname(outputPath)
      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true })
      }

      writeFileSync(outputPath, html, 'utf-8')
      console.log(`  ✓ ${route}`)
      success++

      await page.close()
    } catch (err) {
      console.error(`  ✗ ${route} - ${err.message}`)
      failed++
    }
  }

  await browser.close()
  server.close()

  console.log(`\nPrerendering complete: ${success} succeeded, ${failed} failed\n`)

  if (failed > 0) {
    process.exit(1)
  }
}

prerender()
