# Nonstop Lock & Key - Project Guide

## Business Overview
- **Legal Name:** Nonstop Lock & Key
- **Type:** Mobile locksmith service (no physical storefront)
- **Established:** 2010 (advertised)
- **Brand Identity:** Family-owned, medium-size company (~5 technicians)
- **Primary Market:** St. Louis County, MO (and surrounding areas including Saint Charles)

## Contact & Location
- **Phone:** (314) 532-1112 (only number)
- **Email:** Nonstoplockandkeyco@gmail.com (only email)
- **Address:** 1178 Rue La Chelle Walk, Creve Coeur, MO 63141 (hidden on GMB - service area business)
- **Primary ranking city:** St. Louis (NOT Creve Coeur - Creve Coeur is only the postal address)
- **Hours:** Advertised as 24/7/365
- **Response Time:** 15-30 minutes (accurate)
- **After-hours:** Extra charges apply for weekends/holidays/nights

## Service Areas (Final 20 - do not change without asking)
St. Louis, Saint Charles, Manchester, Ballwin, Brentwood, Bridgeton, Creve Coeur, Des Peres, Frontenac, Kirkwood, Ladue, Maryland Heights, Olivette, Overland, Richmond Heights, Town and Country, University City, Webster Groves, Chesterfield, Clayton

## Services (12 total)
Car Lockout, House Lockout, Commercial Lockout, Emergency Locksmith, Broken Key Extraction, Lock Rekey, Car Key Replacement, Key Fob Programming, Ignition Repair, Lock Installation & Replacement, Smart Lock Installation, Safe Opening & Repair

## Important Rules
- **NO starting prices on the website.** Data files keep `startingPrice` for schema but it must NOT render visually anywhere.
- **Rating is 5.0 stars** (not 4.9). Updates daily.
- **BUSINESS.city = 'St. Louis'** for all marketing/SEO copy. **BUSINESS.addressCity = 'Creve Coeur'** only for schema PostalAddress.
- **Do not add or remove service areas** without explicit user request.
- **Do not add or remove services** without explicit user request.
- Listed on: Google (GMB), Yelp, Thumbtack, BBB, other citations
- Social media accounts exist and are linked on the website

## Tech Stack
- React 18 + TypeScript + Vite 6 + Tailwind CSS 3
- React Router DOM 7 (client-side routing)
- React Helmet Async (per-page SEO)
- Puppeteer prerendering (build-time, 38 routes)
- Hosted on Bolt (bolt.new) - static file hosting

## Key Files
- `src/constants.ts` - Single source of truth for NAP/business info
- `src/data/cities/` - 20 city data files (+ 3 removed but still on disk: stAnn, maplewood, shrewsbury)
- `src/data/services/` - 12 service data files
- `prerender.mjs` - Puppeteer prerender script (38 routes)
- `public/sitemap.xml` - 38 URLs
- `public/robots.txt` - Allow all + sitemap reference

## SEO Architecture
- Every page has: Helmet (title, meta description, canonical, OG tags, Twitter cards, geo tags), JSON-LD schemas (LocalBusiness, FAQPage, BreadcrumbList, Service, Review)
- City pages: LocalBusiness + FAQPage + BreadcrumbList + Review schemas
- Service pages: Service + FAQPage + BreadcrumbList schemas
- Homepage: FAQPage schema in HomeSEO.tsx
- Reviews page: LocalBusiness with review array
- All schemas use `addressCity` for PostalAddress, `city` for marketing copy

## Target Keywords
- "locksmith near me"
- "locksmith St. Louis"
- "key fob programming"
- "emergency locksmith [city name]"
- Goal: rank in Google 3-pack across St. Louis County for all 20 service areas
