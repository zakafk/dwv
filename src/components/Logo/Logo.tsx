import { CSSProperties, FC } from 'react';
import classNames from 'classnames';

import { Picture } from '../Picture';
import logo from '../../../public/logo.svg';

import './logo.scss';

interface ILogoProps {
  size?: number;
  className?: string;
}

export const Logo: FC<ILogoProps> = ({ size = 24, className }) => (
  <div className={classNames('logo', className)}>
    <Picture src={logo} />
    <span className="logo-text" style={{ '--size': `${size}px` } as CSSProperties }>Digital World Visions</span>
  </div>
);
