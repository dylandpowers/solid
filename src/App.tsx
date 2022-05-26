import type { Component } from 'solid-js';
import Header from './components/Header';
import Home from './components/HomeContainer';
import SquareContainer from './components/moving-square/SquareContainer';

const App: Component = () => {
  return (
    <Home>
      <Header />
      <SquareContainer />
    </Home>
  );
};

export default App;
