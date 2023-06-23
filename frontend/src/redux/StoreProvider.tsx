'use client';

import { store } from './store';
import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';

export const StoreProvider: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
