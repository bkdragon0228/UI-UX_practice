import React, { useState } from 'react';

import styles from './tab.module.scss';

import classNames from 'classnames/bind';

interface Props {
  tabItems: {
    name: string;
    contents: JSX.Element;
  }[];
}

const cn = classNames.bind(styles);

const Tab: React.FC<Props> = ({ tabItems }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className={cn('container')}>
      <nav>
        {tabItems.map((item, index) => (
          <button
            key={index}
            className={cn('nav_button', {
              nav_button_active: index === currentIndex,
            })}
            onClick={() => setCurrentIndex(index)}
          >
            {item.name}
          </button>
        ))}
      </nav>
      <section className={cn('contents')}>
        {tabItems.map((item, index) => (
          <div
            key={index}
            className={cn('item', { item_active: index === currentIndex })}
          >
            {item.contents}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Tab;
