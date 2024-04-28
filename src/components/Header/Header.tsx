import { FC } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import { Logo } from '../Logo';
import { Section } from '../Section';
import { Navigation, MobileNavigation } from '../Navigation';
import { useDevice } from '../../hooks/useDevice';
import { HEADER_TYPE_MAP } from '../../constants/header';
import { THeaderType } from '../../enums/THeaderType';

import './header.scss';

export const Header: FC = () => {
  const { pathname } = useLocation();
  const { isDesktop } = useDevice();

  const headerType = HEADER_TYPE_MAP[pathname] || THeaderType.LIGHT;

  return (
    <header className={classNames('header', `header-${headerType}` )}>
      <Section className="header-section">
        <Logo className="header-logo" />
        {isDesktop ? <Navigation/> : <MobileNavigation />}
      </Section>
    </header>
  );
};
