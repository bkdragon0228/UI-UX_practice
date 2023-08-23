import { LoginFormProps, InputList } from './types';

export const list: InputList<LoginFormProps> = [
  {
    name: 'email',
    type: 'text',
    rules: {
      pattern: {
        message: '형식에 맞게 입력해주세요.',
        value: new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}'),
      },
      required: '필수 항목 입니다.',
    },
  },
  {
    name: 'password',
    type: 'password',
    rules: {
      required: '필수 항목 입니다.',
      minLength: { value: 8, message: '8자리 이상이여야 합니다.' },
    },
  },
];
