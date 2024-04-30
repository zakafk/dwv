import { FC } from 'react';
import classNames from 'classnames';

import { EFields } from '../../enums/EFields';

import './inputs.scss';

interface BaseInput {
  field: any;
  errors: Record<string, any>;
  label: string;
  name: EFields;
  type?: string;
  placeholder?: string;
  checked?: boolean;
  rest?: any;
}

export const BaseInput: FC<BaseInput> = ({
  field,
  errors,
  label = '',
  name,
  type,
  placeholder= '',
  checked = false,
}) => {
  const isCheckbox = type === 'checkbox';
  const check = isCheckbox ? { checked } : {};

  return (
    <div className="inputs">
      <div className={classNames({ 'wrapper': isCheckbox })} style={{ width: '100%' }}>
        <label className={classNames('label', {[`label-${type}`]: !!type})} htmlFor={name}>{isCheckbox ? '' : label}</label>
        <input
          {...field}
          id={name}
          className={classNames('input', {[`input-${type}`]: !!type})}
          placeholder={placeholder || label}
          type={type}
          {...check}
        />
        {isCheckbox && <label htmlFor={name} className="label label-additional">{label}</label>}
      </div>
      <p className="error">{errors?.[name]?.message || ''}</p>
    </div>
  );
};
