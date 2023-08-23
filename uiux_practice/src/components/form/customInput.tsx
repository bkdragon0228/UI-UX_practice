import React, { useState } from 'react';

import { ErrorMessage } from '@hookform/error-message';

import { useController } from 'react-hook-form';

import { CustomInputProps } from './types';

import classNames from 'classnames/bind';

import styles from './index.module.scss';

import useDetectClose from '../../hooks/useDetechClose';

const emailCompletion = [
  '@naver.com',
  '@gmail.com',
  '@daum.net',
  '@nate.com',
  '@kakao.com',
];

const cn = classNames.bind(styles);

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

  const [emailList, setEmailList] = useState(emailCompletion);
  const [selectIndex, setSelectIndex] = useState<number>(-1);

  const { isOpen, ref, handleIsOpen } = useDetectClose<HTMLInputElement>(false);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);

    if (e.target.value.includes('@')) {
      handleIsOpen(true);
      setEmailList(
        emailCompletion.filter((item) =>
          item.includes(e.target.value.split('@')[1])
        )
      );
    } else {
      handleIsOpen(false);
    }
  };

  const onClickDropDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    onChange(e);
    handleIsOpen(false);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (isOpen) {
      if (e.key === 'ArrowDown' && emailList.length - 1 > selectIndex) {
        setSelectIndex(selectIndex + 1);
      }

      if (e.key === 'ArrowUp' && selectIndex >= 0) {
        setSelectIndex(selectIndex - 1);
      }
      if (e.key === 'Enter' && selectIndex >= 0) {
        //
      }
    }
  };

  console.log(selectIndex);
  return (
    <div style={{ position: 'relative' }}>
      <input
        value={value}
        onChange={name === 'email' ? (e) => onChangeEmail(e) : onChange}
        type={type}
        placeholder={name}
        className={styles.form_input}
        ref={name === 'email' ? ref : null}
        onKeyUp={(e) => handleKeyUp(e)}
      />
      {isOpen && (
        <div className={styles.drop_down}>
          {emailList.map((email, index) => (
            <button
              key={email}
              value={`${String(value).split('@')[0]}${email}`}
              onClick={(e) => onClickDropDown(e)}
              className={cn('button', { button_active: index === selectIndex })}
            >
              {`${String(value).split('@')[0]}${email}`}
            </button>
          ))}
        </div>
      )}
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
