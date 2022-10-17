import { createContext, useContext, useState } from "react";


const Context = createContext();

export const StateContext = ({ children }) => {
  const [toggle, setToggle] = useState(false);


  return (
    <Context.Provider
      value={{
        toggle,
        setToggle,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);