import React from "react";
import { createContext, useState } from "react";

const ToCContext = createContext([{}, () => {}]);
const TocProvider = ({ children }) => {
  const [pos, setPos] = useState({
    First: 0,
    Second: 0,
    Third: 0,
    Fourth: 0,
  });

  return (
    <ToCContext.Provider value={[pos, setPos]}>{children}</ToCContext.Provider>
  );
};
const { Consumer: ToCConsumer } = ToCContext;
export { TocProvider, ToCConsumer };
export default ToCContext;
