import React from 'react';

import CompoundForm from '../components/CompoundForm/CompoundForm';

import { useForm } from 'react-hook-form';

const TestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const onSubmit = (data: { email: string; password: string }) => {
    console.log(data);
  };
  return (
    <div>
      <CompoundForm onSubmit={handleSubmit(onSubmit)}>
        <CompoundForm.Input
          register={register('email', { required: '입력요망' })}
          name="email"
          errors={errors}
        />
        <CompoundForm.Input
          register={register('password')}
          name="password"
          errors={errors}
        />
      </CompoundForm>
    </div>
  );
};

export default TestForm;
