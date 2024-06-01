/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';

import { Navigations } from './navigations/Navigation';
import { store } from '../store';

const queryClient = new QueryClient();
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Navigations />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
