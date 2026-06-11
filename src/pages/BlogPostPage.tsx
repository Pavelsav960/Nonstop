import { Link, useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Clock, Tag, ChevronLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import NotFound from './NotFound';
import { BUSINESS } from '../constants';
import { getPostBySlug, getRelatedPosts } from '../data/blog';

export default function BlogPostPage() {
  const { postSlug } = useParams<{ postSlug: string }>();
  const post = postSlug ? getPostBySlug(postSlug) : undefined;

  if (!post) return <NotFound />;

  const related = getRelatedPosts(post);
  const canonicalUrl = `${BUSINESS.url}/blog/${post.slug}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BUSINESS.url}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${canonicalUrl}#article`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate ?? post.publishedDate,
    author: { '@type': 'Organization', name: post.author, url: BUSINESS.url },
    publisher: { '@id': `${BUSINESS.url}#localbusiness` },
    image: post.coverImage ? [`${BUSINESS.url}${post.coverImage}`] : [BUSINESS.logo],
    articleSection: post.category,
    keywords: post.tags.join(', '),
    wordCount: post.readingMinutes * 220,
    inLanguage: 'en-US',
    url: canonicalUrl,
  };

  const Content = post.Content;

  return (
    <div className="min-h-screen animate-fade-in">
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="author" content={post.author} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={post.coverImage ?? BUSINESS.logo} />
        <meta property="og:site_name" content={BUSINESS.legalName} />
        <meta property="article:published_time" content={post.publishedDate} />
        {post.updatedDate && <meta property="article:modified_time" content={post.updatedDate} />}
        <meta property="article:section" content={post.category} />
        {post.tags.map((t) => (
          <meta key={t} property="article:tag" content={t} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={post.coverImage ?? BUSINESS.logo} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <Navigation />

      <main>
        {/* HERO */}
        <section className="relative bg-gray-900 pt-24 pb-12 md:pt-36 md:pb-14 overflow-hidden">
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
            <div className="max-w-3xl mx-auto text-white">
              <Link
                to="/blog"
                className="inline-flex items-center gap-1 text-white/70 hover:text-white text-[14px] font-medium normal-case mb-5 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
                Back to blog
              </Link>
              <div className="flex flex-wrap items-center gap-3 text-[13px] sm:text-[14px] text-white/75 normal-case mb-4">
                <span className="inline-flex items-center gap-1.5 text-primary-400 font-semibold uppercase tracking-wider text-[12px] sm:text-[13px]">
                  <Tag className="w-3.5 h-3.5" strokeWidth={2.5} />
                  {post.category}
                </span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" strokeWidth={2.5} />
                  {post.readingMinutes} min read
                </span>
                <span aria-hidden="true">·</span>
                <time dateTime={post.publishedDate}>{post.displayDate}</time>
              </div>
              <h1 className="!text-[2rem] sm:!text-[2.5rem] md:!text-[3rem] lg:!text-[3.25rem] !font-bold !leading-[1.15] mb-5">
                {post.title}
              </h1>
              <p className="text-[18px] sm:text-[20px] text-white/85 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* ARTICLE BODY */}
        <section className="section-ref bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {post.toc && post.toc.length > 0 && (
              <nav aria-label={`${post.title} sections`} className="bg-[#F5F5F5] rounded-2xl border border-gray-200 p-5 sm:p-6 mb-10 sm:mb-12">
                <p className="text-[13px] font-bold tracking-wide uppercase text-primary-600 mb-3">In this article</p>
                <ul className="space-y-1.5">
                  {post.toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-[14px] sm:text-[15px] text-gray-700 hover:text-primary-600 hover:underline underline-offset-2 transition-colors normal-case"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <article className="blog-content">
              <Content />
            </article>
          </div>
        </section>

        {/* RELATED POSTS */}
        {related.length > 0 && (
          <section className="section-ref bg-[#F5F5F5]" aria-labelledby="related-heading">
            <div className="container-ref">
              <div className="text-center mb-10">
                <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
                  Keep Reading
                </p>
                <h2 id="related-heading" className="text-[#17171A]">
                  More From The Blog
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-300 transition-all duration-300 p-5 sm:p-6 flex flex-col"
                  >
                    <span className="inline-flex items-center gap-1 text-primary-700 font-semibold text-[12px] uppercase tracking-wider mb-2">
                      <Tag className="w-3 h-3" strokeWidth={2.5} />
                      {p.category}
                    </span>
                    <h3 className="!text-[16px] sm:!text-[17px] !font-bold text-[#17171A] leading-snug mb-2 normal-case">
                      {p.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-gray-600 leading-[1.55] normal-case flex-1">
                      {p.excerpt.length > 110 ? `${p.excerpt.substring(0, 110)}…` : p.excerpt}
                    </p>
                    <span className="text-[13px] text-primary-600 font-semibold mt-3 normal-case">Read article →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
