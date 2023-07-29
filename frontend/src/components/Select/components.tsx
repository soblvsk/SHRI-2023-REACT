import { SelectPortal } from '@/components/SelectPortal/component';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface Option {
  key: string;
  title: string;
}

export const Select: FunctionComponent<{
  defaultValue?: string;
  onChange: (value: string) => void;
  options?: Option[];
  placeHolder?: string;
}> = ({ defaultValue, onChange, options = [], placeHolder = '' }) => {
  const [value, setValue] = useState(defaultValue);
  const [isOpened, setIsOpened] = useState(false);
  const selectRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !selectRef.current?.contains(event.target as Node) &&
        !menuRef.current?.contains(event.target as Node)
      ) {
        setIsOpened(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setIsOpened(!isOpened)} ref={selectRef} className={styles.select}>
        {options.find(({ key }) => key === value)?.title || placeHolder}
        <svg
          className={classNames(styles.select__icon, isOpened ? styles.select__iconOpen : '')}
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='none'
        >
          <path
            fill='#999FA6'
            fillRule='evenodd'
            d='M7.5 18.958h5c4.525 0 6.458-1.933 6.458-6.458v-5c0-4.525-1.933-6.458-6.458-6.458h-5c-4.525 0-6.458 1.933-6.458 6.458v5c0 4.525 1.933 6.458 6.458 6.458ZM2.292 7.5c0-3.842 1.366-5.208 5.208-5.208h5c3.842 0 5.208 1.366 5.208 5.208v5c0 3.842-1.366 5.208-5.208 5.208h-5c-3.842 0-5.208-1.366-5.208-5.208v-5Zm7.266 4.742a.618.618 0 0 0 .442.183.618.618 0 0 0 .442-.183L13.383 9.3a.629.629 0 0 0 0-.883.629.629 0 0 0-.883 0l-2.5 2.5-2.5-2.5a.629.629 0 0 0-.883 0 .629.629 0 0 0 0 .883l2.941 2.942Z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <SelectPortal visible={isOpened} onClose={() => setIsOpened(false)}>
        <div
          ref={menuRef}
          className={styles.menu}
          style={
            isOpened
              ? {
                  top: selectRef.current?.getBoundingClientRect().bottom,
                  left: selectRef.current?.getBoundingClientRect().left,
                  width: selectRef.current?.getBoundingClientRect().width,
                }
              : undefined
          }
        >
          <button
            key={-1}
            onClick={() => {
              setValue('');
              onChange('');
              setIsOpened(false);
            }}
            className={styles.option}
          >
            Не выбран
          </button>
          {options.map(({ key, title }) => (
            <button
              key={key}
              onClick={() => {
                setValue(key);
                onChange(key);
                setIsOpened(false);
              }}
              className={styles.option}
            >
              {title}
            </button>
          ))}
        </div>
      </SelectPortal>
    </div>
  );
};
