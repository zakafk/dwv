import { FC, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { Picture } from '../Picture';
import { NAV_MAP } from '../../constants/navigation';

import language_icon from '../../assets/icons/language_icon.svg';

import './navigation.scss';

export const Navigation: FC = () => {
  const nav = useMemo(() => NAV_MAP.map(({ title, to}) => (
    <li key={title} className="nav-list-item">
      <NavLink to={to} className="nav-list-item-link">{title}</NavLink>
    </li>
  )), [NAV_MAP]);

  return (
    <>
      <nav className={classNames("nav")}>
        <ul className="nav-list">
          {nav}
          <li className="nav-list-item">
            <div className="languages">
              <span>en</span>
              <Picture src={language_icon} />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
