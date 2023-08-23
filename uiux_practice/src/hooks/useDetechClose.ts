import { useEffect, useState, useRef } from 'react';

const useDetectClose = <T extends HTMLElement>(initialState: boolean) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef<T>(null);

  const handleIsOpen = (value: boolean) => {
    setIsOpen(value);
  };

  useEffect(() => {
    const onClick = (e: any) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isOpen]);

  return { isOpen, ref, handleIsOpen };
};

export default useDetectClose;
