export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string[];
  icon: string;
  startingPrice: string;
  benefits: string[];
  faqs: ServiceFAQ[];
  metaTitle: string;
  metaDescription: string;
  relatedServiceSlugs: string[];
  category: 'Automotive' | 'Residential' | 'Emergency' | 'General';
}

export { serviceData, servicesByCategory } from './services/index';
