import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BUSINESS } from '../constants';

const LAST_UPDATED = '19 May 2026';

const sections = [
  { id: 'acceptance', title: 'Acceptance Of Terms' },
  { id: 'services', title: 'Services We Provide' },
  { id: 'estimates', title: 'Estimates & Pricing' },
  { id: 'payment', title: 'Payment Terms' },
  { id: 'guarantee', title: 'Service Guarantee' },
  { id: 'cancellation', title: 'Cancellation & No-Show' },
  { id: 'liability', title: 'Limitation Of Liability' },
  { id: 'customer-responsibilities', title: 'Customer Responsibilities' },
  { id: 'website-use', title: 'Website Use' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'third-party', title: 'Third-Party Services' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'changes', title: 'Changes To These Terms' },
  { id: 'contact', title: 'Contact Us' },
];

export default function TermsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.url },
      { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: `${BUSINESS.url}/terms` },
    ],
  };

  return (
    <div className="min-h-screen animate-fade-in">
      <Helmet>
        <title>Terms of Service | {BUSINESS.name}</title>
        <meta name="description" content={`Terms of service for ${BUSINESS.name}. Service terms, pricing, payment, and liability provisions for our locksmith services.`} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`${BUSINESS.url}/terms`} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
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
                Legal
              </p>
              <h1 className="!text-[2.25rem] sm:!text-5xl md:!text-6xl !font-bold !leading-[1.1] mb-4">
                Terms Of Service
              </h1>
              <p className="text-[15px] sm:text-base text-white/70 normal-case">
                Last updated: {LAST_UPDATED}
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="section-ref bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Intro */}
            <div className="mb-10 sm:mb-12">
              <p className="text-[16px] sm:text-[17px] text-gray-800 leading-[1.7] normal-case">
                Welcome to {BUSINESS.legalName}. These Terms of Service ("Terms") govern your use of our website and the locksmith services we provide across St. Louis County, Missouri. By contacting us, scheduling work, or using our website, you agree to these Terms.
              </p>
            </div>

            {/* Table of contents */}
            <nav aria-label="Terms of service sections" className="bg-[#F5F5F5] rounded-2xl border border-gray-200 p-5 sm:p-6 mb-10 sm:mb-12">
              <p className="text-[13px] font-bold tracking-wide uppercase text-primary-600 mb-3">On this page</p>
              <ul className="space-y-1.5">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-[14px] sm:text-[15px] text-gray-700 hover:text-primary-600 hover:underline underline-offset-2 transition-colors normal-case">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-10 sm:space-y-12">
              <section id="acceptance" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Acceptance Of Terms</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case">
                  By requesting service, calling our team, submitting a form, or otherwise engaging with {BUSINESS.legalName}, you confirm that you are at least 18 years old and that you have the authority to authorize work on the property, vehicle, or lock in question.
                </p>
              </section>

              <section id="services" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Services We Provide</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case mb-3">
                  {BUSINESS.legalName} is a mobile locksmith providing 24/7 residential, commercial, and automotive locksmith services across St. Louis County. Services include but are not limited to:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-[15px] sm:text-[16px] text-gray-800 leading-[1.7]">
                  <li>Car, house, and commercial lockouts</li>
                  <li>Lock rekey, lock installation, and replacement</li>
                  <li>Car key replacement and key fob programming</li>
                  <li>Broken key extraction and ignition repair</li>
                  <li>Smart lock installation and safe opening</li>
                </ul>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] mt-4 normal-case">
                  We reserve the right to refuse service in cases where we cannot verify ownership or authorization, where the requested work would damage property unnecessarily, or for any reason at our discretion.
                </p>
              </section>

              <section id="estimates" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Estimates & Pricing</h2>
                <ul className="list-disc pl-5 space-y-2 text-[15px] sm:text-[16px] text-gray-800 leading-[1.7]">
                  <li>Phone estimates are free and provided in good faith based on the information you give us.</li>
                  <li>Final pricing is confirmed in person before work begins, after the technician inspects the situation.</li>
                  <li>Additional charges may apply for unusual lock types, high-security locks, late-night, weekend, or holiday calls, and locations outside our standard service area.</li>
                  <li>You will not be charged additional fees beyond the agreed quoted price without your prior consent.</li>
                </ul>
              </section>

              <section id="payment" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Payment Terms</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case mb-3">
                  Payment is due in full upon completion of service unless otherwise agreed in writing. We accept all major credit cards, debit cards, and cash. Returned checks and chargebacks may incur additional fees.
                </p>
              </section>

              <section id="guarantee" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Service Guarantee</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case">
                  We stand behind our work. If you are not satisfied with the service performed, please contact us within a reasonable time and we will work to make it right. Parts installed by {BUSINESS.legalName} are covered by the manufacturer's warranty; defects in our workmanship are covered for 90 days from the date of service.
                </p>
              </section>

              <section id="cancellation" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Cancellation & No-Show</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case">
                  You may cancel a scheduled service by calling {BUSINESS.phone} before the technician is dispatched at no charge. A trip fee may apply if a technician is already en route or arrives on-site and the customer is unavailable or has resolved the issue without notice.
                </p>
              </section>

              <section id="liability" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Limitation Of Liability</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case mb-3">
                  To the maximum extent permitted by law, {BUSINESS.legalName} is not liable for any indirect, incidental, special, consequential, or punitive damages arising from our services or the use of our website. Our total liability for any claim related to our services will not exceed the amount you paid for the specific service in question.
                </p>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case">
                  This limitation does not apply to claims that cannot be limited under applicable law.
                </p>
              </section>

              <section id="customer-responsibilities" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Customer Responsibilities</h2>
                <ul className="list-disc pl-5 space-y-2 text-[15px] sm:text-[16px] text-gray-800 leading-[1.7]">
                  <li>You must provide accurate information about your situation, location, and the lock or vehicle involved.</li>
                  <li>You must be the legal owner of, or authorized to request work on, the property or vehicle in question. Our technicians may ask for identification or proof of ownership.</li>
                  <li>You agree to provide safe access for our technicians to perform the work.</li>
                  <li>You are responsible for any pre-existing damage to locks, doors, or vehicles that is not caused by our technicians.</li>
                </ul>
              </section>

              <section id="website-use" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Website Use</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case">
                  Our website is provided "as is" for informational purposes. You agree not to use the website in ways that violate any law, infringe our intellectual property, or attempt to disrupt the site's functionality. We may update or modify the website at any time without notice.
                </p>
              </section>

              <section id="intellectual-property" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Intellectual Property</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case">
                  All content on this website (text, graphics, logos, images, code) is the property of {BUSINESS.legalName} or our licensors and is protected by copyright and trademark laws. You may not copy, reproduce, or use any content for commercial purposes without our written permission.
                </p>
              </section>

              <section id="third-party" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Third-Party Services</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case">
                  Our website may include third-party services such as Google Maps embeds, Formspree contact forms, and links to social media. We are not responsible for the practices or content of those third-party services. Their use is governed by their own terms.
                </p>
              </section>

              <section id="governing-law" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Governing Law</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case">
                  These Terms are governed by the laws of the State of {BUSINESS.stateFullName}, without regard to its conflict of laws principles. Any disputes will be resolved in the state or federal courts located in St. Louis County, Missouri.
                </p>
              </section>

              <section id="changes" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Changes To These Terms</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case">
                  We may update these Terms from time to time. The "Last updated" date at the top of this page shows when changes were last made. Continued use of our services or website after changes are posted constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section id="contact" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Contact Us</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case mb-4">
                  Questions about these Terms? Reach out:
                </p>
                <div className="bg-[#F5F5F5] rounded-2xl border border-gray-200 p-5 sm:p-6 space-y-2">
                  <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case"><strong>{BUSINESS.legalName}</strong></p>
                  <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case">
                    Phone: <a href={BUSINESS.phoneTel} className="text-primary-600 hover:text-primary-700 font-semibold underline underline-offset-2">{BUSINESS.phone}</a>
                  </p>
                  <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case break-all">
                    Email: <a href={`mailto:${BUSINESS.email}`} className="text-primary-600 hover:text-primary-700 font-semibold underline underline-offset-2">{BUSINESS.email}</a>
                  </p>
                  <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case">
                    Service area: {BUSINESS.city} County, {BUSINESS.stateFullName}
                  </p>
                  <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case">
                    Or use our <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-semibold underline underline-offset-2">contact form</Link>.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
