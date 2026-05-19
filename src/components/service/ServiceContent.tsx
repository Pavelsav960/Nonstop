import { BUSINESS } from '../../constants';
import type { ServiceData } from '../../data/serviceData';

type Props = { service: ServiceData };

export default function ServiceContent({ service }: Props) {
  return (
    <section className="section-ref bg-white" aria-labelledby="service-content-heading">
      <div className="container-ref">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
              About This Service
            </p>
            <h2 id="service-content-heading" className="text-[#17171A] px-2">
              Professional {service.name} In {BUSINESS.city}
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 lg:p-10">
            <div className="prose-content space-y-5">
              {service.longDescription.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[16px] sm:text-[17px] lg:text-[18px] text-[#333437] leading-[1.7] normal-case"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
