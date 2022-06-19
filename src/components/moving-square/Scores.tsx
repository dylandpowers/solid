import { Component, For, onMount, useContext } from "solid-js";
import { getSortedScores } from "../../store/storage/localStorage";
import { TimerContext } from "../../store/timer";
import { TypographyLarge, TypographyMedium } from "../Typography";

const Scores: Component = () => {
  const { stopTimer } = useContext(TimerContext);
  onMount(stopTimer);

  const scores = getSortedScores();
  return (
    <>
      <div class="border-y-2 py-2">
        <TypographyLarge>
          High Scores
        </TypographyLarge>
      </div>
      <div class="text-left p-4">
        <For each={scores}>
          {(item) => (
            <TypographyMedium>
              {item} seconds
            </TypographyMedium>
          )}
        </For>
      </div>
    </>
  );
};

export default Scores;