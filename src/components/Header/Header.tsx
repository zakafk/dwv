import { FC } from 'react';
import classNames from 'classnames';

import { Logo } from '../Logo';
import { Navigation, MobileNavigation } from '../Navigation';
import { useDevice } from '../../hooks/useDevice';
import { Section } from '../Section';

import './header.scss';

type TType = 'dark' | 'light';

interface IHeaderProps {
  type?: TType;
}

export const Header: FC<IHeaderProps> = ({ type = 'light' }) => {
  const { isDesktop } = useDevice();

  return (
    <header className={classNames('header', `header-${type}` )}>
      <Section className="header-section">
        <Logo className="header-logo" />
        {isDesktop ? <Navigation/> : <MobileNavigation />}
      </Section>
    </header>
  );
};
