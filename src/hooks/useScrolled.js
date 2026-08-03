import { useState, useEffect } from 'react';

// Tracks whether the page has been scrolled past `threshold` pixels.
// Used to toggle a subtle shadow on the sticky nav bar.
export default function useScrolled(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
