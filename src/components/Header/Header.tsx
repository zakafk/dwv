import { FC } from 'react';

import { Logo } from '../Logo';
import { Navigation, MobileNavigation } from '../Navigation';
import { useDevice } from '../../hooks/useDevice';

import './header.scss';

export const Header: FC = () => {
  const { isDesktop } = useDevice();

  return (
    <header className="header">
      <Logo />
      {isDesktop ? <Navigation/> : <MobileNavigation />}
    </header>
  );
};
