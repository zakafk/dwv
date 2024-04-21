import {FC, useCallback, useMemo, useState} from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { Picture } from '../Picture';
import { NAV_MAP } from '../../constants/navigation';
import { useDevice } from '../../hooks/useDevice';

import language_icon from '../../assets/icons/language_icon.svg';

import './navigation.scss';
import {AppModal} from "../AppModal";

export const Navigation: FC = () => {
  const { isDesktop } = useDevice();
  const [ isOpen, setOpen] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setOpen(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const nav = useMemo(() => NAV_MAP.map(({ title, to}) => (
    <li key={title} className="nav-list-item">
      <NavLink to={to} className="nav-list-item-link">{title}</NavLink>
    </li>
  )), [NAV_MAP]);

  return (
    <>
      <button onClick={handleCloseMenu}>123</button>
      <nav className={classNames("nav")}>
      {/*<nav className={classNames("nav", { 'nav-mobile': !isDesktop, 'nav-mobile-open': isOpen })}>*/}
        <ul className="nav-list">
          {nav}
        </ul>
        <div className="languages">
          <span>en</span>
          <Picture src={language_icon} />
        </div>
      </nav>
      {!isDesktop && !isOpen && (
        <div className="nav-burger" onClick={handleOpenMenu}>
          <div className="nav-burger-line" />
          <div className="nav-burger-line" />
          <div className="nav-burger-line" />
        </div>
      )}
      <AppModal show={isOpen} onHide={handleCloseMenu} fullscreen className="nav-modal">
        123
      </AppModal>
    </>
  );
}
