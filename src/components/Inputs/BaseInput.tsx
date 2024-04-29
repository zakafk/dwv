import { FC } from 'react';
import classNames from 'classnames';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

import { EFields } from '../../enums/EFields';

import './inputs.scss';

interface BaseInput {
  field: ControllerRenderProps<FieldValues, any>;
  errors: Record<string, any>;
  label: string;
  name: EFields;
  type?: string;
  placeholder?: string;
}

export const BaseInput: FC<BaseInput> = ({
  field,
  errors,
  label = '',
  name,
  type,
  placeholder= '',
}) => {
  const isCheckbox = type === 'checkbox';

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
        />
        {isCheckbox && <label htmlFor={name} className="label label-additional">{label}</label>}
      </div>
      <p className="error">{errors?.[name]?.message || ''}</p>
    </div>
  );
};
