import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Input from './Input';
import { Button } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const SignInForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input control={control} name="email" label="Email" />

      <Input
        control={control}
        name="password"
        label="Password"
        type="password"
      />

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </form>
  );
};

export default SignInForm;
