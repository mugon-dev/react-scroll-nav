import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import ToCContext from "./Toc";
const ThirdStyle = styled.div`
  width: 100%;
  height: 500px;
  background-color: yellow;
`;
function Third() {
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
    <ThirdStyle id="Third" ref={element}>
      third
    </ThirdStyle>
  );
}

export default Third;
