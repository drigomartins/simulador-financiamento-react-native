import React from 'react';
import Main from './src/screens/main';
import DataProvider from './src/utils/context/general';

export default function App() {
  return (
    <DataProvider>
      <Main />
    </DataProvider>
  );
}
