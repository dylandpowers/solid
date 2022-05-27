import type { Component } from 'solid-js';
import Header from './components/Header';
import Home from './components/HomeContainer';
import SquareContainer from './components/moving-square/SquareContainer';
import { store, TimerContext } from './store/timer';

const App: Component = () => {
  return (
    <Home>
      <TimerContext.Provider value={store}>
        <Header />
        <SquareContainer />
      </TimerContext.Provider>
    </Home>
  );
};

export default App;
