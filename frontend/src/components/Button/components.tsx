import React, { FunctionComponent, MouseEventHandler } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

export const Button: FunctionComponent<{
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: string | React.JSX.Element;
  viewVariant?: string;
  className?: string;
  disabled?: boolean;
  size?: string;
}> = ({ onClick, children, viewVariant = 'primary', className, disabled, size = 'm' }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.btn, className, styles[viewVariant], styles[size], {
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
