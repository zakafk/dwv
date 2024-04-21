import {CSSProperties, FC} from 'react';

import { Picture } from '../Picture';
import logo from '../../../public/logo.svg';

import './logo.scss';

interface ILogoProps {
  size?: number;
}

export const Logo: FC<ILogoProps> = ({ size = 24 }) => (
  <div className="logo">
    <Picture src={logo} />
    <span className="logo-text" style={{ '--size': `${size}px` } as CSSProperties }>Digital World Visions</span>
  </div>
);
