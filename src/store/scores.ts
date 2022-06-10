import { createContext } from "solid-js";
import { createStore, produce, StoreNode } from "solid-js/store";
import { addScore, getSortedScores } from "./storage/localStorage";

interface ScoreState extends StoreNode {
  orderedScores: readonly number[];
}

const [state, setState] = createStore<ScoreState>({ orderedScores: getSortedScores() });

type ScoreStore = {
  state: ScoreState;
  insertScore: (score: number) => void;
}

export const store: ScoreStore = {
  state: state,
  insertScore(score: number) {
    addScore(score);
    setState(produce<ScoreState>((s) => {
      s.orderedScores.push(score);
      s.orderedScores.sort((a, b) => b - a);
    }));
  }
};

export const ScoreContext = createContext<ScoreStore>();