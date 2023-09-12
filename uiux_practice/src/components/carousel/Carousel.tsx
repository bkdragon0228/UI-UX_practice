import React, { useState, useEffect, useCallback } from 'react';

import styles from './carousel.module.scss';

import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface Props {
  images: string[];
  interval?: number;
}

const Carousel: React.FC<Props> = ({ images, interval }) => {
  const [current, setCurrent] = useState<number>(0);

  const next = useCallback(() => {
    if (current < images.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      setCurrent(0);
    }
  }, [images.length, current]);

  const prev = useCallback(() => {
    if (current === 0) {
      setCurrent(images.length - 1);
    } else {
      setCurrent((prev) => prev - 1);
    }
  }, [images.length, current]);

  const clickDot = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (!interval) return;

    const timer = setInterval(next, interval);
    return () => {
      clearInterval(timer);
    };
  }, [interval, next]);

  return (
    <div className={cn('container')}>
      {images.map((item, index) => (
        <img
          src={item}
          key={index}
          className={cn('item')}
          style={{ transform: `translateX(${current * -800}px)` }}
          alt="a"
        />
      ))}
      <button className={cn('button')} onClick={prev}>
        {'<'}
      </button>
      <button className={cn('button', 'button_right')} onClick={next}>
        {'>'}
      </button>
      <div className={cn('dot_wrapper')}>
        {images.map((_, index) => (
          <div
            key={index}
            className={cn('dot', { dot_active: current === index })}
            onClick={() => clickDot(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
