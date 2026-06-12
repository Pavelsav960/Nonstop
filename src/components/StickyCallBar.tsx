import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS } from '../constants';

export default function StickyCallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show after the user has scrolled past most of the hero (≈80% viewport height).
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-2px_12px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      role="region"
      aria-label="Quick contact"
    >
      <div className="px-4 pt-2.5 pb-3">
        <p className="text-center text-[14px] font-semibold text-[#17171A] normal-case mb-2 tracking-tight">
          Reliable Locksmiths In St. Louis
        </p>
        <a
          href={BUSINESS.phoneTel}
          className="flex items-center justify-center gap-2 w-full bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white font-bold text-[15px] py-3.5 px-4 rounded-lg shadow-sm transition-colors"
          aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone} to talk to an available technician`}
        >
          <Phone className="w-[18px] h-[18px] flex-shrink-0" strokeWidth={2.5} />
          <span>Talk To An Available Technician</span>
        </a>
      </div>
    </div>
  );
}
