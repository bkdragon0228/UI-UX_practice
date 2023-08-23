import React from 'react';

import { Control, FieldValues, RegisterOptions, Path } from 'react-hook-form';

type Rules = Omit<
  RegisterOptions<FieldValues, string>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
>;

export interface LoginFormProps {
  email: string;
  password: string;
}

export type InputList<T extends object> = {
  name: Path<T>;
  type: React.HTMLInputTypeAttribute;
  rules?: Rules;
}[];

export interface CustomInputProps<T extends object> {
  type: React.HTMLInputTypeAttribute;
  control: Control<T, any>;
  name: Path<T>;
  rules?: Rules;
}
