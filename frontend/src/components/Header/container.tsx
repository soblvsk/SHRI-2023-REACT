'use client';

import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { selectMoviesAmount } from '@/redux/features/cart/selectors';
import { Header } from '@/components/Header/components';

export const HeaderContainer: FunctionComponent<{ className: string }> = ({ className }) => {
  const ticketAmount: number = useSelector(selectMoviesAmount);

  return <Header className={className} ticketAmount={ticketAmount} />;
};
