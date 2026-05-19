import { ShieldCheck } from 'lucide-react';
import type { ServiceData } from '../../data/serviceData';

type Props = { service: ServiceData };

export default function ServiceBenefits({ service }: Props) {
  return (
    <section className="section-ref bg-white" aria-labelledby="benefits-heading">
      <div className="container-ref">
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
            Why Choose Us
          </p>
          <h2 id="benefits-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
            What You Get With Nonstop {service.name}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {service.benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-[#F5F5F5] rounded-2xl p-5 sm:p-6 border border-gray-200"
            >
              <span className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-white" strokeWidth={2.5} />
              </span>
              <p className="text-[15px] sm:text-[16px] text-[#17171A] font-semibold leading-[1.5] mt-1 normal-case">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
