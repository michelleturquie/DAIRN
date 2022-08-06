import { createContext } from "react";

const tokenContext = createContext({
  auth: false,
  setAuth: (auth) => {}
});

export default tokenContext;