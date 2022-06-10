import { ParentComponent } from "solid-js";
import { store as scoreStore, ScoreContext } from "./scores";
import { store as timerStore, TimerContext } from "./timer";

const Providers: ParentComponent = (props) => {
  return (
    <ScoreContext.Provider value={scoreStore}>
      <TimerContext.Provider value={timerStore}>
        {props.children}
      </TimerContext.Provider>
    </ScoreContext.Provider>
  );
};

export default Providers;