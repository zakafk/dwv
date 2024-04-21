import { FC, MouseEventHandler } from 'react';
import classNames from 'classnames';

import './button.scss';

type TButtonType = 'primary' | 'secondary';

interface ButtonProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: TButtonType;
}

export const Button: FC<ButtonProps> = ({ text, onClick, className, type = 'primary' }) => (
  <div className={classNames(className)}>
    <button type="button" className={classNames('button bold', type)} onClick={onClick}>{text}</button>
  </div>
);
