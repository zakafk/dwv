import { FC } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import { Logo } from '../Logo';
import { Section } from '../Section';
import {
  Navigation,
  // MobileNavigation,
} from '../Navigation';
// import { useDevice } from '../../hooks/useDevice';
import { HEADER_TYPE_MAP } from '../../constants/header';
import { EHeaderType } from '../../enums/EHeaderType';

import './header.scss';

export const Header: FC = () => {
  const { pathname } = useLocation();
  // const { isDesktop } = useDevice();

  const headerType = HEADER_TYPE_MAP[pathname] || EHeaderType.DARK;

  return (
    <header className={classNames('main-header', `main-header-${headerType}` )}>
      <Section className="main-header-section">
        <Logo className="main-header-logo" />
        {/*{isDesktop ? <Navigation /> : <MobileNavigation />}*/}
        <Navigation/>
      </Section>
    </header>
  );
};
