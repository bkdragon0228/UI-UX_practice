import React from 'react';

import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form';

import { ErrorMessage } from '@hookform/error-message';

export interface CompoundInputProps {
  register: UseFormRegisterReturn<string>;
  name: string;
  errors: FieldErrors;
  style?: React.CSSProperties;
}

const CompoundInput: React.FC<CompoundInputProps> = ({
  register,
  errors,
  name,
  style,
}) => {
  return (
    <div>
      <input {...register} style={style} />
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

export default CompoundInput;
