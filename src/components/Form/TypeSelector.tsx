import React, { useState } from "react";
import styled from "styled-components";
import { COLOR } from "../../styles/constants";

function TypeSelector({ setValue, register, order }: any) {
  const [TypeValue, setTypeValue] = useState("radio");
  const [isShow, setIsShow] = useState(false);

  const TypeStyle = (value: string) => {
    switch (value) {
      case "radio":
        return ["radio_button_checked", "객관식 질문"];
      case "select":
        return ["check_box", "체크박스"];
      case "drop":
        return ["expand_circle_down", "드롭다운"];
      case "short":
        return ["short_text", "단답형"];
      case "long":
        return ["notes", "장문형"];
      default:
        return ["radio_button_checked", "객관식 질문"];
    }
  };
  const SelectTypeValue = (value: string) => {
    setTypeValue(value);
    setIsShow(!isShow);
    setValue(`items.${order}.type`, value);
  };
  return (
    <>
      {isShow ? (
        <Background onClick={() => setIsShow(!isShow)}></Background>
      ) : null}
      <Wrap>
        <Selector type="button" onClick={() => setIsShow(!isShow)}>
          <i className="material-icons">{TypeStyle(TypeValue)[0]}</i>
          <span>{TypeStyle(TypeValue)[1]}</span>
        </Selector>
        {isShow ? (
          <Container>
            <li onClick={() => SelectTypeValue("short")}>
              <i className="material-icons">{TypeStyle("short")[0]}</i>
              <span>단답형</span>
            </li>
            <li onClick={() => SelectTypeValue("long")}>
              <i className="material-icons">{TypeStyle("long")[0]}</i>
              <span>장문형</span>
            </li>
            <li onClick={() => SelectTypeValue("radio")}>
              <i className="material-icons">{TypeStyle("radio")[0]}</i>
              <span>객관식 질문</span>
            </li>
            <li onClick={() => SelectTypeValue("select")}>
              <i className="material-icons">{TypeStyle("select")[0]}</i>
              <span>체크박스</span>
            </li>
            <li onClick={() => SelectTypeValue("drop")}>
              <i className="material-icons">{TypeStyle("drop")[0]}</i>
              <span>드롭다운</span>
            </li>
          </Container>
        ) : null}
      </Wrap>
    </>
  );
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
const Wrap = styled.div`
  flex: 0.7;
  position: relative;
`;
const Hide = styled.input`
  /* display: none; */
`;
const Selector = styled.button`
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 100%;
  gap: 8px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid ${COLOR.middleGrey};
  font-size: 1rem;
  &::after {
    position: absolute;
    margin: 0 8px;
    right: 0;
    content: "expand_more";
    font-family: "Material Icons";
  }
`;
const Container = styled.ul`
  position: absolute;
  left: 0;
  top: 100%;
  padding: 8px 12px;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid ${COLOR.middleGrey};
  z-index: 1;
  li {
    display: flex;
    align-items: center;
    margin: 4px 0;
    padding: 12px 8px;
    gap: 8px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    &:hover {
      background-color: ${COLOR.grey};
    }
  }
`;
export default TypeSelector;
