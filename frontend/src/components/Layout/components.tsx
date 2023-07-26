import React from 'react';
import { HeaderContainer } from '../Header/container';
import { Footer } from '../Footer/components';

import styles from './styles.module.scss';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.root}>
      <HeaderContainer className={styles.header} />
      <main className={styles.content}>{children}</main>
      <Footer />
      <div id='select-portal' className={styles.selectPortal} />
      <div id='modal-portal' className={styles.selectPortal} />
    </div>
  );
};
