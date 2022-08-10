import { createContext } from "react";

const menuContext = createContext({
  menu: [],
  setMenu: (platos) => {}
});

export default menuContext;