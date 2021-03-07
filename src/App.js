import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import { TocProvider } from "./Toc";
import styled from "styled-components";
const BodyStyle = styled.div``;
function App() {
  return (
    <div className="App">
      <TocProvider>
        <Nav />
        <BodyStyle>
          <First />
          <Second />
          <Third />
          <Fourth />
        </BodyStyle>
      </TocProvider>
    </div>
  );
}

export default App;
