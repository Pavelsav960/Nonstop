export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceHowItWorksStep {
  title: string;
  description: string;
}

export interface ServiceReview {
  name: string;
  rating: number;
  date: string;
  text: string;
  location?: string;
  photo?: string;
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
  howItWorks: ServiceHowItWorksStep[];
  metaTitle: string;
  metaDescription: string;
  relatedServiceSlugs: string[];
  category: 'Automotive' | 'Residential' | 'Emergency' | 'General';
  reviews?: ServiceReview[];
}

export { serviceData, servicesByCategory } from './services/index';
