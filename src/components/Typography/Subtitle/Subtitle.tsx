import { FC } from 'react';

import { Typography } from '../Typography';
import { ITypographyProps } from '../interfaces';

import '../typography.scss';

export const Subtitle: FC<ITypographyProps> = ({
  children,
  color = 'white',
  align = 'left',
  className,
}) => (
  <Typography color={color} align={align} className={className}>
    <p className="typography-subtitle">{children}</p>
  </Typography>
);
