import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import ToCContext from "./Toc";
const FirstStyle = styled.div`
  width: 100%;
  height: 500px;
  background-color: green;
`;
function First() {
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
    <FirstStyle id="First" ref={element}>
      first
    </FirstStyle>
  );
}

export default First;
