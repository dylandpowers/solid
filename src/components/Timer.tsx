import { Component, createMemo, createSignal, onCleanup } from "solid-js";
import { TypographyMedium } from "./Typography";

const Timer: Component = () => {
  const [timeElapsed, setTimeElapsed] = createSignal<number>(0);

  const interval = setInterval(() => {
    setTimeElapsed((prev) => prev + 1);
  }, 1000);
  onCleanup(() => clearInterval(interval));

  const formattedTime = createMemo(() => {
    const time = timeElapsed();
    return `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`;
  });

  return (
    <TypographyMedium>{formattedTime()}</TypographyMedium>
  );
};

export default Timer;