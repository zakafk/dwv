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
  disabled?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
}

export const Button: FC<ButtonProps> = ({
  text,
  onClick,
  className,
  buttonType = 'primary',
  type = 'button',
  disabled = false,
  isSuccess = false,
  isError = false,
}) => (
  <div className={classNames(className)}>
    <button
      disabled={disabled}
      type={type}
      className={classNames('button bold', buttonType, { 'success': isSuccess, 'error': isError } )}
      onClick={onClick}
    >
      {isSuccess && 'Success'}
      {isError && 'Try again'}
      {!isError && !isSuccess && text}
    </button>
  </div>
);
