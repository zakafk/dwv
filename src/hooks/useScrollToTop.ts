import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

export const useScrollToTop = () => {
  const { pathname, hash } = useLocation();

  if (hash === '#form') return;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
