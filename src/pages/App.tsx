import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { COLOR } from "../styles/constants";

function App() {
  return (
    <>
      <Main>
        <Section>
          <h1>
            손쉽게 <strong>당신만의 설문조사를</strong>만들어보세요
          </h1>
          <Link to="/create">
            <Create>새로 만들기</Create>
          </Link>
        </Section>
      </Main>
    </>
  );
}

const Main = styled.main`
  position: relative;
  background-image: url("/background_unsplash.jpg");
  background-size: cover;
  height: 100vh;
`;
const Section = styled.section`
  position: absolute;
  padding: 40px 32px;
  min-width: 65vw;
  height: 65vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(20px);
  h1 {
    font-size: 2rem;
    text-align: center;
    line-height: 3rem;
    word-break: keep-all;
    strong {
      display: block;
      font-size: 2.6rem;
      font-weight: 700;
    }
  }
`;
const Create = styled.button`
  display: block;
  margin: 16px auto;
  width: 132px;
  height: 40px;
  background-color: ${COLOR.vermilion};
  border-radius: 5px;
  color: #fff;
  font-size: 1.2rem;
  transition: all 0.3s;
  &:hover {
    background-color: #fff;
    border: 2px solid ${COLOR.vermilion};
    color: ${COLOR.vermilion};
  }
`;
export default App;
