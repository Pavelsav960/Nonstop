import { Star, MapPin, Clock } from 'lucide-react';

const differentiators = [
  {
    label: 'We Have',
    stat: '5 Star Rating',
    sub: 'Trusted By 100+ Local Customers',
    Icon: Star,
  },
  {
    label: 'We Are',
    stat: 'Family-Owned',
    sub: 'Serving St. Louis County Since 2010',
    Icon: MapPin,
  },
  {
    label: 'We Provide',
    stat: '24/7 Emergency Service',
    sub: 'Lockouts, Rekeys, Key Fobs & More',
    Icon: Clock,
  },
];

export default function HowWeAreDifferent() {
  return (
    <section className="bg-gray-900 py-14 sm:py-16 lg:py-16">
      <div className="container-ref max-w-[1100px]">
        <h2 className="text-white text-center mb-8 sm:mb-10 lg:!text-[40px]">
          How We Are Different
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {differentiators.map((d) => (
            <div
              key={d.label}
              className="relative bg-white rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-4 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex-1 min-w-0">
                <p className="text-primary-600 text-[12px] sm:text-[13px] font-semibold tracking-wide normal-case">
                  {d.label}
                </p>
                <h3 className="text-[#17171A] !text-[18px] sm:!text-[20px] lg:!text-[22px] !font-bold mt-1 leading-tight">
                  {d.stat}
                </h3>
                <p className="text-gray-600 text-[12px] sm:text-[13px] mt-1.5 normal-case leading-snug">
                  {d.sub}
                </p>
              </div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <d.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
