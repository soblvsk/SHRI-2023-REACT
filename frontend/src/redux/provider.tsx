'use client';

import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

export const StoreProvider: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children} </Provider>;
};
