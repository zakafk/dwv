import { FC } from 'react';
import classNames from 'classnames';

interface IPictureProps {
  src: string;
  alt?: string;
  className?: string;
}

export const Picture: FC<IPictureProps> = ({ src, alt = '', className }) => (
  <div>
    <img src={src} alt={alt} className={classNames(className)} width="100%" height="100%" />
  </div>
);
