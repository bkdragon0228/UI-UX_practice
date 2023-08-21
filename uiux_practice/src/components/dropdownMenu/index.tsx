import React, { useState } from 'react';

import classNames from 'classnames/bind';

import styles from './index.module.scss';

interface Props {
  title: string;
}

const cn = classNames.bind(styles);

const DropDownMenu: React.FC<Props> = ({ title }) => {
  const optionList = ['1', '2', '3'];
  const [value, setValue] = useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!value) return;

    console.log(value);
  };

  return (
    <form onSubmit={onSubmit} className={cn('form')}>
      <div className={cn('dropdown_box')}>
        <div className={cn('dropdown_title', { dropdown_title_active: value })}>
          {title}
        </div>
        <select
          onChange={(e) => setValue(e.target.value)}
          required
          name="number"
          className={cn('dropdown')}
        >
          <option value=""></option>
          {optionList.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">제출</button>
    </form>
  );
};

export default DropDownMenu;
