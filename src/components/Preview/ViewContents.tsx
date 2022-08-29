import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { COLOR } from "../../styles/constants";
import { CreatePreview } from "../../store/Preview";
import usePreview from "../../hooks/usePreview";
import ItemCard from "./ItemCard";

function ViewContents() {
  const location = useLocation();
  const { data } = usePreview();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  }: any = useForm({
    mode: "onBlur",
    defaultValues: {
      title: data?.title,
      explain: data?.explain,
      items: [],
    },
  });
  const dispatch = useDispatch();

  const CloseModal = () => {
    dispatch(
      CreatePreview({
        title: "",
        explain: "",
        items: [
          {
            question: "",
            type: "",
            isDefault: false,
            hasEtc: false,
            option: [],
          },
        ],
      })
    );
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <StickyMsg type="preview">
        {location.pathname === "/"
          ? "응답 제출 내용이 콘솔창에 보여집니다."
          : "이 창은 설문조사 미리보기 화면입니다."}
        <i className="material-icons" onClick={CloseModal}>
          close
        </i>
      </StickyMsg>
      {errors.items ? (
        <StickyMsg type="error">
          <i className="material-icons">warning</i>
          필수로 응답해야 하는 질문에 답변하지 않았습니다.
        </StickyMsg>
      ) : null}
      <Main onSubmit={handleSubmit(onSubmit)}>
        <Title>
          <div></div>
          <article>
            <h2 id="title">{data?.title}</h2>
            <p id="explain">{data?.explain}</p>
          </article>
        </Title>
        <Contents>
          {data?.title
            ? data?.items.map((el, index) => (
                <ItemCard
                  key={index}
                  itemId={index}
                  setValue={setValue}
                  register={register}
                  question={el.question}
                  type={el.type}
                  option={el.option}
                  isDefault={el.isDefault}
                  hasEtc={el.hasEtc}
                />
              ))
            : null}
        </Contents>
        <Submit type="submit">응답제출</Submit>
      </Main>
    </>
  );
}

const Main = styled.form`
  padding: 8px;
`;
const StickyMsg = styled.article<{ type: string }>`
  position: sticky;
  display: flex;
  justify-content: ${(props) =>
    props.type === "preview" ? "space-between" : "flex-start"};
  align-items: center;
  margin: 0 0 -12px;
  padding: 12px 16px;
  top: 0;
  background-color: ${(props) =>
    props.type === "preview"
      ? "#d2d2d2"
      : props.type === "error"
      ? "#ffc42e"
      : null};
  i {
    ${(props) => (props.type === "preview" ? `cursor: pointer;` : null)}
  }
`;
const Title = styled.section`
  margin: 32px 20px 0;
  box-shadow: 0 6px 8px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  div {
    width: 100%;
    height: 8px;
    background-color: ${COLOR.vermilion};
  }
  article {
    padding: 20px 28px;
  }
  input {
    margin: 8px 0;
    padding: 2px 4px;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 2px solid ${COLOR.grey};
    transition: all 0.5s;
    &:focus {
      border-bottom: 2px solid ${COLOR.vermilion};
    }
  }
  #title {
    font-size: 2rem;
    font-weight: 700;
  }
  #explain {
    margin-top: 12px;
    font-size: 1.05rem;
  }
`;
const Contents = styled.section`
  margin-bottom: 24px;
`;

const Submit = styled.button`
  display: block;
  margin: 0 auto;
  padding: 12px 28px;
  background-color: ${COLOR.vermilion};
  border-radius: 25px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
`;

export default ViewContents;
