/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { Navigations } from './navigations/Navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();
function App(): React.JSX.Element {


  return (
    // <Provider store>
    <QueryClientProvider client={queryClient}>
      <Navigations />
    </QueryClientProvider>
    // </Provider>
  );
}


export default App;
