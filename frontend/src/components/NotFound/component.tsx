import React from 'react';
import styles from './styles.module.scss';

export const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <svg
        className={styles.notfound__icon}
        xmlns='http://www.w3.org/2000/svg'
        width='128px'
        height='128px'
        viewBox='0 0 20 20'
      >
        <path
          fill='currentColor'
          d='M4.5 3A2.5 2.5 0 0 0 2 5.5v7A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 13.5 3h-9ZM7 6.756a.75.75 0 0 1 1.171-.62l3.61 2.451a.5.5 0 0 1 .001.827l-3.61 2.458A.75.75 0 0 1 7 11.252V6.756ZM6.5 17a2.496 2.496 0 0 1-2-1H14a3 3 0 0 0 3-3V5.5c.607.456 1 1.182 1 2V13a4 4 0 0 1-4 4H6.5Z'
        ></path>
      </svg>

      <div className={styles.notfound__text}>Ничего не найдено :(</div>
    </div>
  );
};