import React from 'react';

import CompoundForm from '../components/CompoundForm/CompoundForm';

import { useForm } from 'react-hook-form';

const TestForm2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string; name: string }>();

  const onSubmit = (data: {
    email: string;
    password: string;
    name: string;
  }) => {
    console.log(data);
  };

  return (
    <div>
      <CompoundForm onSubmit={handleSubmit(onSubmit)}>
        <CompoundForm.Input
          register={register('email', { required: '입력요망' })}
          name="email"
          errors={errors}
          style={{ width: '120px' }}
        />
        <CompoundForm.Input
          register={register('password')}
          name="password"
          errors={errors}
        />
        <CompoundForm.Input
          register={register('name')}
          name="name"
          errors={errors}
        />
      </CompoundForm>
    </div>
  );
};

export default TestForm2;
