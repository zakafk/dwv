import { FC } from 'react';

import { Typography } from '../Typography';
import { ITypographyProps } from '../interfaces';

import '../typography.scss';

export const Title: FC<ITypographyProps> = ({
  children,
  color = 'white',
  align = 'left',
  className,
}) => (
  <Typography color={color} align={align} className={className}>
    <h2 className="typography-title">{children}</h2>
  </Typography>
);
