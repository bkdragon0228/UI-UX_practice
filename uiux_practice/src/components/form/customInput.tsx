import React from 'react';

import { ErrorMessage } from '@hookform/error-message';

import { useController } from 'react-hook-form';

import { CustomInputProps } from './types';

import styles from './index.module.scss';

const CustomInput = <TFormData extends object>({
  type,
  control,
  name,
  rules,
}: CustomInputProps<TFormData>) => {
  const {
    field: { onChange, value },
    formState: { errors },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={name}
        className={styles.form_input}
      />
      <ErrorMessage
        errors={errors}
        name={name as unknown as any}
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type} style={{ color: 'red' }}>
              {message}
            </p>
          ))
        }
      />
    </div>
  );
};

export default CustomInput;
