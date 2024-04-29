import { FC, MouseEventHandler } from 'react';
import classNames from 'classnames';

import './button.scss';

type TButtonType = 'primary' | 'secondary' | 'submit';

type TType = 'submit' | 'button';

interface ButtonProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  buttonType?: TButtonType;
  type?: TType;
}

export const Button: FC<ButtonProps> = ({
  text,
  onClick,
  className,
  buttonType = 'primary',
  type = 'button',
}) => (
  <div className={classNames(className)}>
    <button type={type} className={classNames('button bold', buttonType)} onClick={onClick}>{text}</button>
  </div>
);
