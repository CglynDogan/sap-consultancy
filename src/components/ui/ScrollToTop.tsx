'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-[#009DE0] text-white shadow-lg transition-all duration-300 hover:bg-[#007CC0] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#009DE0] focus:ring-offset-2',
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-2 opacity-0 pointer-events-none'
      )}
      aria-label="Scroll to top"
    >
      <svg
        className="h-6 w-6 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}