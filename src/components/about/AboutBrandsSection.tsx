import { Home, Smartphone, Building2, Car } from 'lucide-react';

const categories = [
  {
    Icon: Home,
    label: 'Residential & Deadbolts',
    brands: ['Schlage', 'Kwikset', 'Yale', 'Baldwin', 'Defiant', 'Master Lock'],
  },
  {
    Icon: Smartphone,
    label: 'Smart Locks',
    brands: ['August', 'Schlage Encode', 'Yale Assure', 'Kwikset Halo', 'Ring', 'Google Nest'],
  },
  {
    Icon: Building2,
    label: 'Commercial & High-Security',
    brands: ['Medeco', 'Mul-T-Lock', 'Abloy', 'Sargent', 'Best', 'Marks USA'],
  },
  {
    Icon: Car,
    label: 'Automotive',
    brands: ['Ford', 'Chevrolet', 'Honda', 'Toyota', 'Nissan', 'Hyundai', 'Subaru', 'BMW', 'Mercedes-Benz', 'Audi', 'Acura', 'Lexus'],
  },
];

export default function AboutBrandsSection() {
  return (
    <section className="section-ref bg-white" aria-labelledby="brands-heading">
      <div className="container-ref">
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
            Brands We Service
          </p>
          <h2 id="brands-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
            We Work With Every Major Lock & Vehicle Brand
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[19px] text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
            From residential deadbolts to commercial high-security systems and modern car keys, our technicians are trained on the brands you trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {categories.map(({ Icon, label, brands }) => (
            <div
              key={label}
              className="bg-[#F5F5F5] rounded-2xl border border-gray-200 p-6 sm:p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Icon className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-white" strokeWidth={2.5} />
                </div>
                <h3 className="!text-[18px] sm:!text-[20px] !font-bold text-[#17171A] leading-tight normal-case">
                  {label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[13px] sm:text-[14px] font-medium text-gray-800 normal-case"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-[14px] sm:text-[15px] text-gray-600 max-w-2xl mx-auto px-4 normal-case">
          Don't see your brand? Call us — chances are we service it. Our technicians stay current on new models and smart lock releases.
        </p>
      </div>
    </section>
  );
}
