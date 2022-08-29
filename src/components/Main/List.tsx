import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { COLOR } from "../../styles/constants";
import { CreatePreview } from "../../store/Preview";
import { IPollDataInfo } from "../../types/PollDataType";

function List() {
  const dispatch = useDispatch();
  const [reRenderList, setReRenderList] = useState(false); // 삭제 후 로컬스토리지 상태 강제 리렌더링
  const getItem = JSON.parse(localStorage.getItem("saved") ?? `[]`);

  const viewPoll = (data: IPollDataInfo) => {
    dispatch(
      CreatePreview({
        title: data.title,
        explain: data.explain,
        items: data.items,
      })
    );
  };
  const delPoll = (pollId: string | undefined) => {
    // eslint-disable-next-line no-restricted-globals
    const isDelete = confirm(
      `설문조사를 삭제합니다.\n이 동작은 되돌릴 수 없습니다.`
    );
    if (isDelete) {
      let delItems = getItem.filter(
        (el: IPollDataInfo) => el.pollId !== pollId
      );
      localStorage.removeItem("saved");
      localStorage.setItem("saved", JSON.stringify([...delItems]));
      setReRenderList(!reRenderList);
    }
  };
  return (
    <>
      <Title>
        <i className="material-icons">check</i>저장된 설문조사
        {getItem.length === 0 && "가 없습니다."}
      </Title>
      <Container>
        {getItem.map((el: IPollDataInfo, index: number) => (
          <Card key={index}>
            {reRenderList}
            <div>
              <h3>{el.title}</h3>
              <p>{el.explain ?? "설명이 없는 설문조사"}</p>
              <span>
                {el.items[0].question} 등 {el.items.length}개의 질문
              </span>
            </div>
            <div>
              <button type="button" onClick={() => viewPoll(el)}>
                설문 보기
              </button>
              <button
                type="button"
                className="material-icons"
                onClick={() => delPoll(el?.pollId)}
              >
                delete
              </button>
            </div>
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
  display: flex;
  justify-content: space-between;
  margin: 0 0 8px;
  padding: 12px 16px;
  background-color: rgba(256, 256, 256, 0.5);
  border-radius: 5px;
  line-height: 1.3rem;
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
  }
  span,
  p {
    font-size: 0.9rem;
  }
  div:last-child {
    display: flex;
    align-items: center;
    gap: 8px;
    button:first-child {
      padding: 8px 12px;
      background-color: ${COLOR.white};
      border-radius: 5px;
    }
  }
`;

export default List;
