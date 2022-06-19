import { createContext } from "solid-js";
import { createStore, produce, StoreNode } from "solid-js/store";

interface TimerState extends StoreNode {
  value: number;
  intervalId?: number;
}

type TimerStore = {
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
    if (state.intervalId) {
      clearInterval(state.intervalId);
    }
    
    setState(produce<TimerState>((s) => {
      delete s.intervalId;
      s.value = 0;
    }));
  }
};

export const TimerContext = createContext<TimerStore>();