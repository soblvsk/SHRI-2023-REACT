'use client';

import React, { FunctionComponent } from 'react';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { selectTotalAmount } from '@/redux/features/cart/selectors';
import { Header } from '@/components/Header/components';

export const HeaderContainer: FunctionComponent<{ className: string }> = ({ className }) => {
  const ticketAmount = useSelector((state: RootState) => selectTotalAmount(state));

  return <Header className={className} ticketAmount={ticketAmount} />;
};
