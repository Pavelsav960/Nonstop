import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BUSINESS } from '../constants';

const LAST_UPDATED = '19 May 2026';

const sections = [
  { id: 'information-we-collect', title: 'Information We Collect' },
  { id: 'how-we-use', title: 'How We Use Your Information' },
  { id: 'sharing', title: 'How We Share Your Information' },
  { id: 'cookies', title: 'Cookies & Tracking' },
  { id: 'retention', title: 'Data Retention' },
  { id: 'your-rights', title: 'Your Rights & Choices' },
  { id: 'children', title: "Children's Privacy" },
  { id: 'security', title: 'Data Security' },
  { id: 'third-party', title: 'Third-Party Links' },
  { id: 'changes', title: 'Changes To This Policy' },
  { id: 'contact', title: 'Contact Us' },
];

export default function PrivacyPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.url },
      { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${BUSINESS.url}/privacy` },
    ],
  };

  return (
    <div className="min-h-screen animate-fade-in">
      <Helmet>
        <title>Privacy Policy | {BUSINESS.name}</title>
        <meta name="description" content={`Privacy policy for ${BUSINESS.name}. Learn how we collect, use, and protect your personal information.`} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`${BUSINESS.url}/privacy`} />
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
                Privacy Policy
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
                {BUSINESS.legalName} ("we", "us", "our") respects your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have when you visit our website or contact us for locksmith services across St. Louis County, Missouri.
              </p>
            </div>

            {/* Table of contents */}
            <nav aria-label="Privacy policy sections" className="bg-[#F5F5F5] rounded-2xl border border-gray-200 p-5 sm:p-6 mb-10 sm:mb-12">
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

            {/* Sections */}
            <div className="space-y-10 sm:space-y-12">
              <section id="information-we-collect" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Information We Collect</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case mb-4">
                  We collect information you provide directly to us and information collected automatically when you use our website.
                </p>
                <h3 className="!text-[17px] sm:!text-[18px] !font-bold text-[#17171A] mb-2 mt-5 normal-case">Information you provide</h3>
                <ul className="list-disc pl-5 space-y-2 text-[15px] sm:text-[16px] text-gray-800 leading-[1.7]">
                  <li>Name, phone number, and email address when you submit a contact form or request service.</li>
                  <li>Service address or city to dispatch a technician.</li>
                  <li>Details about the locksmith service you are requesting.</li>
                  <li>Any other information you choose to include in a message or phone call.</li>
                </ul>
                <h3 className="!text-[17px] sm:!text-[18px] !font-bold text-[#17171A] mb-2 mt-5 normal-case">Information collected automatically</h3>
                <ul className="list-disc pl-5 space-y-2 text-[15px] sm:text-[16px] text-gray-800 leading-[1.7]">
                  <li>Standard server log information including IP address, browser type, device type, and pages visited.</li>
                  <li>Approximate location data derived from your IP address to help us understand where our visitors come from.</li>
                </ul>
              </section>

              <section id="how-we-use" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">How We Use Your Information</h2>
                <ul className="list-disc pl-5 space-y-2 text-[15px] sm:text-[16px] text-gray-800 leading-[1.7]">
                  <li>To respond to your service inquiries and provide locksmith services.</li>
                  <li>To contact you by phone, text, or email about scheduling, pricing, and follow-up.</li>
                  <li>To improve our website, services, and customer experience.</li>
                  <li>To comply with legal obligations, prevent fraud, and protect our rights.</li>
                </ul>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] mt-4 normal-case">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section id="sharing" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">How We Share Your Information</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] mb-3 normal-case">
                  We share information only as needed to deliver our services:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[15px] sm:text-[16px] text-gray-800 leading-[1.7]">
                  <li><strong>Service providers:</strong> We use Formspree to process contact form submissions and Google Maps to display our service area. These providers process limited data on our behalf under their own privacy policies.</li>
                  <li><strong>Technicians:</strong> Your name, phone number, and service address are shared with the dispatched technician to complete your job.</li>
                  <li><strong>Legal requirements:</strong> We may share information if required by law, court order, or to protect the rights and safety of our customers, technicians, or business.</li>
                </ul>
              </section>

              <section id="cookies" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Cookies & Tracking</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case mb-3">
                  Our website uses minimal cookies, primarily for essential functions such as remembering form state. Embedded third-party services (such as Google Maps) may set their own cookies subject to their privacy policies.
                </p>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case">
                  Most browsers allow you to block or delete cookies through your browser settings. Disabling cookies may affect how certain parts of the website function.
                </p>
              </section>

              <section id="retention" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Data Retention</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case">
                  We retain contact information and service records only as long as needed to provide our services, answer follow-up questions, and meet our legal, tax, and accounting obligations. Web log data is generally retained for no more than 12 months.
                </p>
              </section>

              <section id="your-rights" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Your Rights & Choices</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case mb-3">
                  Depending on where you live, you may have the right to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[15px] sm:text-[16px] text-gray-800 leading-[1.7]">
                  <li>Request access to the personal information we hold about you.</li>
                  <li>Request correction or deletion of your personal information.</li>
                  <li>Opt out of receiving non-essential communications from us.</li>
                  <li>Opt out of the "sale" or "sharing" of personal information (we do not sell or share for cross-context behavioral advertising).</li>
                </ul>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] mt-4 normal-case">
                  To exercise any of these rights, contact us using the details below. We will respond within a reasonable timeframe.
                </p>
              </section>

              <section id="children" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Children's Privacy</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case">
                  Our services are not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with information, please contact us and we will delete it.
                </p>
              </section>

              <section id="security" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Data Security</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case">
                  We take reasonable steps to protect your information using industry-standard practices. No website or online service is 100% secure, however, and we cannot guarantee absolute security of information transmitted to us.
                </p>
              </section>

              <section id="third-party" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Third-Party Links</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case">
                  Our website may contain links to third-party websites such as Google Business Profile, social media platforms, or partner directories. We are not responsible for the privacy practices of those sites. Please review their policies before sharing any personal information.
                </p>
              </section>

              <section id="changes" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Changes To This Policy</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The "Last updated" date at the top of this page indicates when the policy was last revised. Material changes will be highlighted on this page.
                </p>
              </section>

              <section id="contact" className="scroll-mt-24">
                <h2 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-4 normal-case">Contact Us</h2>
                <p className="text-[15px] sm:text-[16px] text-gray-800 leading-[1.7] normal-case mb-4">
                  Questions about this Privacy Policy or your data? Reach out:
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
