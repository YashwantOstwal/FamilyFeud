import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import GameContainer from '@pages/GamePage';
import GameContainer from '@containers/GameContainer';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GameContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
