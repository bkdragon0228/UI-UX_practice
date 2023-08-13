import React, { useState } from 'react';

import styles from './index.module.scss';

import classNames from 'classnames/bind';

import basicCn from 'classnames';

const cn = classNames.bind(styles);

const AccordianMenu = () => {
  const [activeId, setActiveId] = useState<string>('');

  const handleActiveId = (id: string) => {
    if (activeId === id) {
      setActiveId('');
      return;
    }
    setActiveId(id);
  };

  const menuList = [
    { title: 'A', contents: ['A-1', 'A-2'], id: '1' },
    { title: 'B', contents: ['B-1', 'B-2'], id: '2' },
  ];

  return (
    <div>
      {menuList?.map((item) => (
        <div key={item?.id}>
          <button
            className={cn('menu_button')}
            onClick={() => handleActiveId(item.id)}
          >
            <i
              className={basicCn('ri-arrow-down-line', {
                'ri-arrow-up-line': activeId === item.id,
              })}
            ></i>
            <h2>{item?.title}</h2>
          </button>

          <div>
            {item?.contents.map((content) => (
              <div
                key={item?.id}
                className={cn('menu_item', {
                  menu_item_active: activeId === item.id,
                })}
              >
                {content}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordianMenu;
