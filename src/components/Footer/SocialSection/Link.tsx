import { FC } from 'react';

import { TTarget } from '../../../types/TTarget';
import { Picture } from '../../Picture';


interface ILink {
  href: string;
  src: string;
  target?: TTarget;
}

export const Link: FC<ILink> = ({ href, src, target = 'self' }) => (
  <a href={href} className="social-link" target={target}>
    <Picture src={src} />
  </a>
);
