import { FC, useMemo, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { Picture } from '../Picture';
import { NAV_MAP } from '../../constants/navigation';

import language_icon from '../../assets/icons/language_icon.svg';

import './navigation.scss';

interface INavigationPops {
  callback?: VoidFunction;
}

export const Navigation: FC<INavigationPops> = ({ callback }) => {
  const handleClick = useCallback(() => {
    if (callback) callback();
  }, []);

  const nav = useMemo(() => NAV_MAP.map(({ title, to}) => (
    <li key={title} className="nav-list-item" onClick={handleClick}>
      <NavLink to={to} className="nav-list-item-link">{title}</NavLink>
    </li>
  )), [NAV_MAP]);

  return (
    <>
      <nav className={classNames("nav")}>
        <ul className="nav-list">
          {nav}
          <li className="nav-list-item d-none">
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
