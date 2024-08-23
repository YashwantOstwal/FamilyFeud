import React from 'react';
import '@styles/App.css';
import AppRouter from '@routes/AppRouter';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  );
};
export default App;
