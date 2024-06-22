import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "123456";
  const name = "Prity"
  return (
    <AppContext.Provider value={{phone,name}}>{props.children}</AppContext.Provider>
  );
};
export default ContextProvider;
