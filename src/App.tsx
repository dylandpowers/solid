import type { Component } from 'solid-js';
import Home from './components/HomeContainer';
import SquareContainer from './components/moving-square/SquareContainer';
import { TypographyLarge } from './components/Typography';

const App: Component = () => {
  return (
    <Home>
      <TypographyLarge>Hello, Dylan</TypographyLarge>
      <TypographyLarge>We have been trying to contact you about your car's extended warranty.</TypographyLarge>
      <SquareContainer />
    </Home>
  );
};

export default App;
