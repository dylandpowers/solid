import type { Component } from 'solid-js';
import Header from './components/Header';
import Home from './components/HomeContainer';
import SquareContainer from './components/moving-square/SquareContainer';
import Providers from './store/Providers';

const App: Component = () => {
  return (
    <Providers>
      <Home>
        <Header />
        <SquareContainer />
      </Home>
    </Providers>
  );
};

export default App;
