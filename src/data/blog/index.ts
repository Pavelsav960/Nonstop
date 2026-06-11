import type { BlogPost } from './blogData';
import { locksmithScamsPost } from './locksmithScamsAndHowToAvoidThem';

export const blogPosts: BlogPost[] = [
  locksmithScamsPost,
];

// Newest first by published date
export const blogPostsByDate = [...blogPosts].sort((a, b) =>
  b.publishedDate.localeCompare(a.publishedDate)
);

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);

export const getRelatedPosts = (post: BlogPost, max = 3): BlogPost[] =>
  blogPostsByDate
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.category === post.category || p.tags.some((t) => post.tags.includes(t)))
    .slice(0, max);
