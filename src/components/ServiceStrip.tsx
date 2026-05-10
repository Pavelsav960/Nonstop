const strip = [
  { slug: 'car-lockout', label: 'Lockout & Emergency Services' },
  { slug: 'lock-installation-replacement', label: 'Lock Repair & Replacement' },
  { slug: 'lock-rekey', label: 'Lock Rekey Services' },
  { slug: 'key-fob-programming', label: 'Car Key Programming' },
];

export default function ServiceStrip() {
  return (
    <section className="bg-white py-8 sm:py-10 lg:py-12">
      <div className="container-ref">
        <h3 id="services-include-heading" className="text-center text-[#17171A] mb-5 sm:mb-7">
          Our Services Include
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-3">
          {strip.map((s) => (
            <div
              key={s.slug}
              className="flex items-center justify-start bg-primary-500 text-white font-medium text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.25] rounded-[8px] px-4 py-2.5 lg:px-5 lg:py-3 shadow-sm text-left min-h-[48px] capitalize"
            >
              {s.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
