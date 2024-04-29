import React from 'react';

import { Form, Input as AntdInput } from 'antd';
import { useController } from 'react-hook-form';

const inputComponentByType = {
  text: AntdInput,
  password: AntdInput.Password,
};

const Input = ({ control, name, label, type }) => {
  const {
    field,
    formState: { errors },
  } = useController({ control, name });

  const InputComponent =
    inputComponentByType[type] || inputComponentByType.text;

  const error = errors[name];

  return (
    <Form.Item
      label={label}
      validateStatus={error && "error"}
      help={error && error.message}
    >
      <InputComponent {...field} />
    </Form.Item>
  );
};

export default Input;
