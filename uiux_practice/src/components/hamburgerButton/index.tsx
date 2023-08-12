import React from 'react';

import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cn = classNames.bind(styles);

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const HamburgerButton: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={cn('burger')}
      onClick={() => setIsOpen(!isOpen)}
      aria-label="navigation menu"
    >
      <span className={cn({ 'line-first': isOpen })} aria-hidden="true" />
      <span className={cn({ 'line-second': isOpen })} aria-hidden="true" />
      <span className={cn({ 'line-last': isOpen })} aria-hidden="true" />
    </div>
  );
};

export default HamburgerButton;
