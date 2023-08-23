import React from 'react';

import { useFormContext } from 'react-hook-form';

import { InputList } from './types';

import CustomInput from './customInput';

import styles from './index.module.scss';

interface Props<TFormData extends object> {
  title: string;
  onSubmit: (data: TFormData) => void;
  list: InputList<TFormData>;
}

const Form = <TFormData extends object>({
  title,
  onSubmit,
  list,
}: Props<TFormData>) => {
  const { control, handleSubmit } = useFormContext<TFormData>();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2>{title}</h2>
        {list.map(({ name, rules, type }, index) => (
          <CustomInput
            key={index}
            type={type}
            control={control}
            name={name}
            rules={rules}
          />
        ))}
        <button className={styles.form_button}>제출</button>
      </form>
    </div>
  );
};

export default Form;
