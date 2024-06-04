import { FC } from 'react';
import classNames from 'classnames';

import { TTarget } from '../../../types/TTarget';
import { Picture } from '../../Picture';

interface ILink {
  href: string;
  src: string;
  target?: TTarget;
  className?: string;
}

export const Link: FC<ILink> = ({ href, src, target = 'self', className }) => (
  <a href={href} className={classNames('social-link', className)} target={target}>
    <Picture src={src} />
  </a>
);
