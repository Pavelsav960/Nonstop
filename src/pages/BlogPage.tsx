import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Clock, Tag } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BUSINESS } from '../constants';
import { blogPostsByDate } from '../data/blog';

export default function BlogPage() {
  const logoUrl = BUSINESS.logo;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BUSINESS.url}/blog` },
    ],
  };

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${BUSINESS.url}/blog#blog`,
    url: `${BUSINESS.url}/blog`,
    name: `${BUSINESS.name} Blog`,
    description: 'Locksmith safety guides, scam alerts, and how-to articles from a licensed St. Louis locksmith.',
    publisher: { '@id': `${BUSINESS.url}#localbusiness` },
    blogPost: blogPostsByDate.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${BUSINESS.url}/blog/${p.slug}`,
      datePublished: p.publishedDate,
      dateModified: p.updatedDate ?? p.publishedDate,
      author: { '@type': 'Organization', name: p.author },
    })),
  };

  return (
    <div className="min-h-screen animate-fade-in">
      <Helmet>
        <title>Locksmith Blog | Safety, Scams & How-To Guides | {BUSINESS.name}</title>
        <meta
          name="description"
          content={`The ${BUSINESS.name} blog. Safety guides, locksmith scam alerts, smart-lock how-tos, and consumer protection tips from a licensed St. Louis locksmith.`}
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`${BUSINESS.url}/blog`} />
        <meta property="og:title" content={`Locksmith Blog | ${BUSINESS.name}`} />
        <meta property="og:description" content="Safety guides, locksmith scam alerts, and how-to articles from a licensed St. Louis locksmith." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BUSINESS.url}/blog`} />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:site_name" content={BUSINESS.legalName} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      </Helmet>

      <Navigation />

      <main>
        {/* HERO */}
        <section className="relative bg-gray-900 pt-24 pb-12 md:pt-36 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>
          <div className="container-ref relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <p className="text-primary-500 text-[14px] sm:text-[16px] font-semibold tracking-[0.15em] uppercase mb-4">
                Resources
              </p>
              <h1 className="!text-[2.25rem] sm:!text-5xl md:!text-6xl !font-bold !leading-[1.1] mb-5">
                Locksmith Blog
              </h1>
              <p className="text-xl md:text-2xl text-white/85 leading-relaxed">
                Safety guides, scam alerts, and how-to articles from a licensed St. Louis locksmith.
              </p>
            </div>
          </div>
        </section>

        {/* POST LIST */}
        <section className="section-ref bg-white" aria-labelledby="post-list-heading">
          <div className="container-ref">
            <h2 id="post-list-heading" className="sr-only">All blog posts</h2>
            {blogPostsByDate.length === 0 ? (
              <p className="text-center text-gray-500 normal-case">No posts yet — check back soon.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
                {blogPostsByDate.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-300 transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    {post.coverImage && (
                      <Link to={`/blog/${post.slug}`} className="block">
                        <img
                          src={post.coverImage}
                          alt={post.coverImageAlt ?? post.title}
                          loading="lazy"
                          className="w-full h-48 sm:h-52 object-cover"
                        />
                      </Link>
                    )}
                    <div className="p-6 sm:p-7 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-[12px] text-gray-500 mb-3 normal-case">
                        <span className="inline-flex items-center gap-1 text-primary-700 font-semibold">
                          <Tag className="w-3.5 h-3.5" strokeWidth={2.5} />
                          {post.category}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" strokeWidth={2.5} />
                          {post.readingMinutes} min read
                        </span>
                      </div>
                      <h3 className="!text-[18px] sm:!text-[20px] !font-bold text-[#17171A] leading-snug mb-3 normal-case">
                        <Link to={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.6] normal-case mb-5 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <span className="text-[13px] text-gray-500 normal-case">{post.displayDate}</span>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold text-[14px] normal-case"
                          aria-label={`Read full article: ${post.title}`}
                        >
                          Read article
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
