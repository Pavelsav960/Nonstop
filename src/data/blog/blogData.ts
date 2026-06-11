import type { FC } from 'react';

export type BlogCategory =
  | 'Safety & Scams'
  | 'How-To Guides'
  | 'Lock & Key Tips'
  | 'Industry News'
  | 'Smart Locks';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  category: BlogCategory;
  tags: string[];
  author: string;
  publishedDate: string; // ISO 8601 e.g. '2026-05-19'
  displayDate: string;   // human readable e.g. '19 May 2026'
  updatedDate?: string;
  readingMinutes: number;
  coverImage?: string;
  coverImageAlt?: string;
  Content: FC;
  toc?: Array<{ id: string; title: string }>;
};
