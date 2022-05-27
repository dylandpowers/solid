import { Component, createMemo, onCleanup, onMount, useContext } from "solid-js";
import { TimerContext } from "../store/timer";
import { TypographyMedium } from "./Typography";

const Timer: Component = () => {
  const { state, startTimer, stopTimer } = useContext(TimerContext);

  onMount(() => startTimer());
  onCleanup(() => stopTimer());

  const formattedTime = createMemo(() => {
    const time = state.value;
    return `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`;
  });

  return (
    <TypographyMedium>{formattedTime()}</TypographyMedium>
  );
};

export default Timer;