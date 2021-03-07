import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import First from "./First";
import Second from "./Second";
import ToCContext from "./Toc";
const Box = styled.div`
  position: sticky;
  top: 0;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: white;
`;
const AStyle = styled.a`
  &:link {
    color: red;
    text-decoration: none;
  }
  &:visited {
    color: black;
    text-decoration: none;
  }
  &:hover {
    color: blue;
    text-decoration: underline;
  }
`;
const LiStyle = styled.li`
  font-weight: ${(props) => props.active};
`;

function Nav({
  list = [
    {
      name: "First",
      href: "First",
    },
    {
      name: "Second",
      href: "Second",
    },
    {
      name: "Third",
      href: "Third",
    },
    {
      name: "Fourth",
      href: "Fourth",
    },
  ],
}) {
  const [active, setActive] = useState(0);
  const [pos] = useContext(ToCContext);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.pageYOffset + 100;
      console.log(scrollTop);
      console.log(pos);
      if (scrollTop < pos.Second) {
        setActive(0);
      }
      if (pos.Second <= scrollTop && scrollTop < pos.Third) {
        setActive(1);
      }
      if (pos.Third <= scrollTop && scrollTop < pos.Fourth) {
        setActive(2);
      }
      if (pos.Fourth <= scrollTop) {
        setActive(3);
      }
      console.log(active);
    };
    if (pos.Second !== 0 && pos.Thrid !== 0 && pos.Fourth !== 0) {
      window.addEventListener("scroll", onScroll);
    }
    console.log("active", active);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [pos]);

  return (
    <Box>
      <a href={`#${First}`}>1</a>
      <a href={`#${Second}`}>2</a>
      <a href="Third">3</a>
      <a href="Fourth">4</a>
      <ul>
        {list.map((el, idx) => (
          <LiStyle
            className={idx === active ? "bold" : "regular"}
            key={idx}
            active={idx === active ? "bold" : "regular"}
          >
            <AStyle href={`#${el.href}`} active={active}>
              {el.name}
            </AStyle>
          </LiStyle>
        ))}
      </ul>
    </Box>
  );
}

export default Nav;
