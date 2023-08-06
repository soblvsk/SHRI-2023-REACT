import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';
import classNames from 'classnames';

export const Footer = () => {
  return (
    <footer className={classNames(styles.footer, styles.root)}>
      <div className={styles.footer__body}>
        <Link href='/faq' className={styles.footer__link}>
          Вопросы-ответы
        </Link>
        <Link href='/about' className={styles.footer__link}>
          О нас
        </Link>
      </div>
    </footer>
  );
};
