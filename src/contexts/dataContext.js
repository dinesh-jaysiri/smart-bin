import React, { useContext, createContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
