import { Link } from 'react-router';

export type StripItem = { slug: string; label: string };

const defaultStrip: StripItem[] = [
  { slug: 'car-lockout', label: 'Lockout & Emergency Services' },
  { slug: 'lock-installation-replacement', label: 'Lock Repair & Replacement' },
  { slug: 'lock-rekey', label: 'Lock Rekey Services' },
  { slug: 'key-fob-programming', label: 'Car Key Programming' },
];

type Props = {
  services?: StripItem[];
  heading?: string;
};

export default function ServiceStrip({ services, heading = 'Our Services Include' }: Props = {}) {
  const strip = services && services.length > 0 ? services : defaultStrip;
  const customMode = Boolean(services && services.length > 0);

  const gridClass =
    strip.length === 3
      ? 'grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3'
      : strip.length === 2
        ? 'grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3'
        : 'grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-3';

  const cardClass =
    'flex items-center justify-start bg-primary-500 text-white font-medium text-[18px] sm:text-[17px] lg:text-[18px] leading-[1.25] rounded-[8px] px-4 py-2.5 lg:px-5 lg:py-3 shadow-sm text-left min-h-[48px] capitalize';

  return (
    <section className={`${customMode ? 'bg-[#F5F5F5]' : 'bg-white'} py-8 sm:py-10 lg:py-12`}>
      <div className="container-ref">
        <h3
          id="services-include-heading"
          className="text-center text-[#17171A] mb-5 sm:mb-7 text-[28px] md:text-[36px] lg:text-[42px]"
        >
          {heading}
        </h3>

        <div className={gridClass}>
          {strip.map((s) =>
            customMode ? (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                aria-label={`View ${s.label}`}
                className={`${cardClass} hover:bg-primary-600 hover:shadow-md transition-all`}
              >
                {s.label}
              </Link>
            ) : (
              <div key={s.slug} className={cardClass}>
                {s.label}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
