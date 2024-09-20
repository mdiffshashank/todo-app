import React from "react";
import { TODO } from "./types";

export const AppContext = React.createContext<ContextType>({
  deleteById: (s) => {},
  addToDo: (t) => {},
  list: [],
});

export const AppProvider = AppContext.Provider;

export type ContextType = {
  deleteById: (s: string) => void;
  list: Array<TODO>;
  addToDo: (s: string) => void;
};
