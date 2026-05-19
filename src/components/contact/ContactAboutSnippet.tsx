import { Link } from 'react-router';
import { BUSINESS } from '../../constants';

export default function ContactAboutSnippet() {
  return (
    <section className="section-ref bg-white" aria-labelledby="contact-about-heading">
      <div className="container-ref">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
            About Us
          </p>
          <h2 id="contact-about-heading" className="text-[#17171A] mb-5 sm:mb-6">
            Family-Owned. Locally Run. Since 2010.
          </h2>
          <p className="text-[16px] sm:text-[18px] lg:text-[19px] text-gray-700 leading-[1.65] font-medium">
            When you call {BUSINESS.name}, you reach a real local team, not a national dispatch line. Our family-owned mobile fleet has served St. Louis County for over 16 years with upfront pricing, licensed technicians, and a commitment to doing the job right the first time.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-1 mt-6 text-primary-600 hover:text-primary-700 font-semibold text-[15px] sm:text-base underline underline-offset-4 transition-colors"
          >
            Read our full story
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
