import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

import { Options } from '../../lib/interfaces';
import styles from './styles.module.css';
import classnames from 'classnames';

interface Props {
  label: string;
  placeholder: string;
  options: Options[];
  value: string;
  onChange: (value: string) => void;
}

export const Dropdown: FunctionComponent<Props> = ({ label, placeholder, options, value, onChange }) => {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownSelectRef = useRef<HTMLDivElement>(null);
  const dropdownOptionsRef = useRef<HTMLDivElement>(null);

  const handleSelectChange = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  const toggleDropdown = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !dropdownOptionsRef.current?.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('scroll', () => setOpen(false));

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('scroll', () => setOpen(false));
    };
  }, []);

  const renderDropdownOptions = () => {
    return (
      <div id='dropdown-portal'>
        <div
          className={styles['dropdown__options']}
          ref={dropdownOptionsRef}
          style={{
            width: dropdownSelectRef.current?.getBoundingClientRect().width ?? 0,
            top: dropdownSelectRef.current?.getBoundingClientRect().bottom ?? 0,
            left: dropdownSelectRef.current?.getBoundingClientRect().left ?? 0,
          }}
        >
          {options.map((option, index) => (
            <div className={styles['dropdown__item']} key={index} onClick={() => handleSelectChange(option.id)}>
              {option.name}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderPortal = () => {
    return createPortal(renderDropdownOptions(), document.body);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <label className={styles['dropdown__label']}>{label}</label>
      <div className={styles['dropdown__control']} onClick={toggleDropdown} ref={dropdownSelectRef}>
        <div>{value || <span className={styles['dropdown__select-placeholder']}>{placeholder}</span>}</div>
        <svg
          className={classnames(styles['dropdown__icon'], open ? styles['dropdown__icon-true'] : '')}
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
      </div>
      {open && renderPortal()}
    </div>
  );
};
