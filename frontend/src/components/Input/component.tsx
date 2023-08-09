import React, { FunctionComponent, InputHTMLAttributes } from 'react';

import styles from './style.module.scss';
import classNames from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className: string;
}

export const Input: FunctionComponent<Props> = ({ className, ...props }) => {
  return <input {...props} className={classNames(className, styles.input)} />;
};
