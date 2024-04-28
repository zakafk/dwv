import { FC } from 'react';
import classNames from 'classnames';

type TColor = 'gray' | 'violet' | 'blue' | 'gold';

interface IDotsProps {
  length?: number;
  color?: TColor;
  className?: string;
}

import './dots.scss';

export const Dots: FC<IDotsProps> = ({ length = 75, color = 'gray', className }) => {
  const circles = Array.from({ length }, (_, index) => index + 1);

  return (
    <div className={classNames('dots-container', className)}>
      {circles.map((circleIndex) => (
        <div key={circleIndex} className={classNames('dots-item', `dots-item-${color}`)} />
      ))}
    </div>
  );
};
