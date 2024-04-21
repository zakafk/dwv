import { useMedia } from 'react-use';

type TUseDevice = {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
};

export const useDevice = (): TUseDevice => {
  const isDesktop = useMedia('(min-width: 1024px)');
  const isTablet = useMedia('(max-width: 1023px) and (min-width: 768px)');
  const isMobile = useMedia('(max-width: 767px)');

  return {
    isDesktop,
    isTablet,
    isMobile,
  };
};
