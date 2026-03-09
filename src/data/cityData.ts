export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CityReview {
  name: string;
  rating: number;
  date: string;
  text: string;
  service: string;
}

export interface CityPricing {
  service: string;
  startingPrice: string;
  description: string;
}

export interface CityData {
  name: string;
  slug: string;
  description: string;
  neighborhoods: string[];
  localContext: string;
  metaTitle: string;
  metaDescription: string;
  lat: number;
  lng: number;
  faqs: CityFAQ[];
  reviews: CityReview[];
  pricing: CityPricing[];
  whyChooseUs: string;
  securityTips: string[];
  responseTime: string;
  servingParagraph: string;
}

export { cityData } from './cities/index';
