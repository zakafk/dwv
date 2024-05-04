import { ReactNode } from 'react';

type TColor =
  | 'white'
  | 'black'
  | 'gray'
  | 'gray-light'
  | 'violet'
  | 'violet-deep'
  | 'violet-light'
  | 'gold'
  | 'gold-deep'
  | 'gold-light';

type TAlign = 'left' | 'center' | 'right';

export interface ITypographyProps {
  children: string | ReactNode;
  color?: TColor;
  align?: TAlign;
  className?: string;
}
