import type { ServiceData } from '../../data/serviceData';

type Props = { service: ServiceData };

export default function ServiceHowItWorks({ service }: Props) {
  return (
    <section className="section-ref bg-white" aria-labelledby="how-it-works-heading">
      <div className="container-ref">
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
            The Process
          </p>
          <h2 id="how-it-works-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
            How {service.name} Works
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[19px] text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
            Simple, transparent, and fast. Here's what to expect when you call.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {service.howItWorks.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-7"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white text-[20px] sm:text-[22px] font-bold leading-none">
                    {index + 1}
                  </span>
                </div>
                <h3 className="!text-[20px] sm:!text-[22px] !font-bold text-[#17171A] leading-tight normal-case">
                  {step.title}
                </h3>
              </div>
              <p className="text-[15px] sm:text-[16px] text-gray-700 leading-[1.65] normal-case">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
