import { Route, Routes } from 'solid-app-router';
import type { Component } from 'solid-js';
import Header from './components/Header';
import Home from './components/HomeContainer';
import Scores from './components/moving-square/Scores';
import SquareContainer from './components/moving-square/SquareContainer';
import Providers from './store/Providers';

const App: Component = () => {
  return (
    <Providers>
      <Home>
        <Header />
        <Routes>
          <Route path="/" element={<SquareContainer />} />
          <Route path="/scores" element={<Scores />} />
        </Routes>
      </Home>
    </Providers>
  );
};

export default App;
