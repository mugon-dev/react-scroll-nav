import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import ToCContext from "./Toc";
const FourthStyle = styled.div`
  width: 100%;
  height: 500px;
  background-color: purple;
`;
function Fourth() {
  const element = useRef(null);
  const [pos, setPos] = useContext(ToCContext);
  useEffect(() => {
    const rect = element.current.getBoundingClientRect();
    setPos((pos) => ({
      ...pos,
      [element.current.id]:
        document.documentElement.offsetHeight - window.innerHeight,
    }));
  }, [setPos]);
  return (
    <FourthStyle id="Fourth" ref={element}>
      fourth
    </FourthStyle>
  );
}

export default Fourth;
