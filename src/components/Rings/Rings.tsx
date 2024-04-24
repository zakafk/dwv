import { CSSProperties, FC } from 'react';
import classNames from "classnames";

import './rings.scss';

type TType = 'gold' | 'silver';

interface IRingsProps {
  type?: TType;
  className?: string;
  rotate?: number;
  scale?: number;
}

export const Rings: FC<IRingsProps> = ({
 type = 'silver',
 className,
 rotate = 0,
 scale = 1,
}) => (
  <div
    className={classNames('rings', type, className )}
    style={{ '--rotate': `${rotate}deg`, '--scale': `${scale}` } as CSSProperties }
  />
);
