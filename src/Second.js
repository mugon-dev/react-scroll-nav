import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import ToCContext from "./Toc";
const SecondStyle = styled.div`
  width: 100%;
  height: 500px;
  background-color: red;
`;
function Second() {
  const element = useRef(null);
  const [pos, setPos] = useContext(ToCContext);
  useEffect(() => {
    const rect = element.current.getBoundingClientRect();
    setPos((pos) => ({
      ...pos,
      [element.current.id]: rect.top + window.pageYOffset,
    }));
  }, [setPos]);
  return (
    <SecondStyle id="Second" ref={element}>
      second
    </SecondStyle>
  );
}

export default Second;
