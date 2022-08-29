import React from "react";
import styled from "styled-components";
import { IPollDataInfo } from "../../types/PollDataType";

function List() {
  const getItem = JSON.parse(localStorage.getItem("saved") ?? `[]`);
  return (
    <>
      <Title>
        <i className="material-icons">check</i>저장된 설문조사
        {getItem.length === 0 && "가 없습니다."}
      </Title>
      <Container>
        {getItem.map((el: IPollDataInfo, index: number) => (
          <Card>
            <h3>{el.title}</h3>
            <span>
              {el.items[0].question} 등 {el.items.length}개의 질문
            </span>
          </Card>
        ))}
      </Container>
    </>
  );
}

const Title = styled.h2`
  display: flex;
  margin: 20px 0 12px;
  align-items: center;
  gap: 4px;
`;
const Container = styled.ul`
  max-height: 300px;
  overflow-y: scroll;
`;
const Card = styled.li`
  margin: 8px 0;
  padding: 8px 12px;
  background-color: rgba(256, 256, 256, 0.5);
  line-height: 1.3rem;
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

export default List;
