import React from 'react';
import { CartItemsContainer } from '@/components/CartItems/container';
import { CartResult } from '@/components/CartResult/component';

import styles from './styles.module.scss';

export const CartPage = () => {
  return (
    <div className={styles.cart}>
      <CartItemsContainer />
      <CartResult />
    </div>
  );
};
