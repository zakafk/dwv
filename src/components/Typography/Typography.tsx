import { FC } from 'react';
import classNames from 'classnames';

import { ITypographyProps } from './interfaces';

export const Typography: FC<ITypographyProps> = ({
  color = 'black',
  align = 'left',
  className,
  children,
}) => (
  <div className={classNames('typography', `typography-${color} typography-${align}`, className)}>
    {children}
  </div>
);
