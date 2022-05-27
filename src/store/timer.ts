import { createContext } from "solid-js";
import { createStore, produce, StoreNode } from "solid-js/store";

export interface TimerState extends StoreNode {
  value: number;
  intervalId?: number;
}

export type TimerStore = {
  state: TimerState;
  startTimer: () => void;
  stopTimer: () => void;
}

const [state, setState] = createStore<TimerState>({ value: 0 });

export const store: TimerStore = {
  state: state,
  startTimer() {
    const interval = setInterval(() => {
      setState(produce<TimerState>((s) => {
        s.value++;
      }));
    }, 1000);
    setState(produce<TimerState>((s) => {
      s.intervalId = interval;
    }));
  },
  stopTimer() {
    clearInterval(state.intervalId!);
    setState(produce<TimerState>((s) => {
      delete s.intervalId;
    }));
  }
};

export const TimerContext = createContext<TimerStore>();