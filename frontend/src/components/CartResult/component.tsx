'use client';

import React from 'react';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { selectTotalAmount } from '@/redux/features/cart/selectors';

import styles from './styles.module.scss';

export const CartResult = () => {
  const ticketAmount = useSelector((state: RootState) => selectTotalAmount(state));
  return (
    <div className={styles.cart__result}>
      <span>Итого билетов:</span>
      <span>{ticketAmount}</span>
    </div>
  );
};
