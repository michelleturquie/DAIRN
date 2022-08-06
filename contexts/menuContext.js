import { createContext } from "react";

const menuContext = createContext({
  platos: [],
  setPlatos: (platos) => {}
});

export default menuContext;