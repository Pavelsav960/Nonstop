import { useEffect, useState } from 'react';
import { BUSINESS } from '../constants';

export default function StickyCallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById('services-include-heading');

    // Pages without the heading (non-home): show immediately so the bar still works there.
    if (!trigger) {
      setShow(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary-600 shadow-[0_-2px_10px_rgba(0,0,0,0.15)] transition-all duration-700 ease-out ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
      }`}
    >
      <a
        href={BUSINESS.phoneTel}
        className="flex items-center justify-center gap-2 py-3.5 text-white font-semibold text-lg"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call Now: {BUSINESS.phone}
      </a>
    </div>
  );
}
