import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { CreatePreview } from "../../store/Preview";

import { COLOR } from "../../styles/constants";
import Item from "./Item";

function MakeForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, control, watch, setValue }: any = useForm({
    mode: "onBlur",
    defaultValues: {
      title: "제목이 없는 설문지",
      explain: "",
      items: [
        {
          question: "",
          type: "radio",
          option: ["새로운 옵션"],
          isDefault: false,
          hasEtc: false,
        },
      ],
    },
  });
  /// fieldarray
  const { fields, append, remove, insert } = useFieldArray({
    control,
    name: "items",
  });

  const onSubmit = (data: any) => {
    let getData = JSON.parse(localStorage.getItem("saved") ?? `[]`);
    console.log(getData);
    if (getData.length === 0) {
      localStorage.setItem("saved", JSON.stringify([data]));
    } else {
      localStorage.removeItem("saved");
      localStorage.setItem("saved", JSON.stringify([...getData, data]));
    }
  };
  const onPreview = (data: any) => {
    dispatch(
      CreatePreview({
        title: data.title,
        explain: data.explain,
        items: data.items,
      })
    );
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>
        <div></div>
        <article>
          <input
            type="text"
            id="title"
            autoFocus={true}
            onFocus={(e) => e.target.select()}
            placeholder="설문의 제목을 입력하세요"
            {...register("title", {
              required: true,
            })}
          />
          <input
            type="text"
            id="explain"
            placeholder="설문지 설명"
            {...register("explain")}
          />
        </article>
      </Title>
      <Contents>
        {fields.map((item, index) => (
          <ItemWrap key={index}>
            <Item
              setValue={setValue}
              itemIndex={index}
              itemRemove={remove}
              itemFields={fields}
              itemInsert={insert}
              order={index}
              watch={watch}
              register={register}
              control={control}
              useFieldArray={useFieldArray}
            />
          </ItemWrap>
        ))}
      </Contents>
      <FormActions>
        <button
          className="action-button"
          type="button"
          onClick={() =>
            append({ question: "", type: "radio", option: ["새로운 옵션"] })
          }
        >
          <i className="material-icons">add</i>질문 추가
        </button>
        <button
          className="action-button"
          type="button"
          onClick={handleSubmit(onPreview)}
        >
          미리보기
        </button>
        <button id="submit-button" type="submit">
          보내기
        </button>
      </FormActions>
    </Form>
  );
}

const Form = styled.form``;
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
    font-size: 1.2rem;
  }
`;
const Contents = styled.section`
  margin-bottom: 120px;
`;
const ItemWrap = styled.div`
  margin: 24px 20px;
  box-shadow: 0 6px 8px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
const FormActions = styled.section`
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 0;
  padding: 32px;
  width: 100vw;
  background: linear-gradient(rgba(255, 255, 255, 0) 0%, #ffffff 50%);
  button {
    display: flex;
    align-items: center;
    margin: 0 8px;
    padding: 12px 28px;
    height: 52px;
    border-radius: 25px;
    font-size: 1.2em;
  }
  .action-button {
    gap: 8px;
    background-color: #fff;
    border: 2px solid ${COLOR.vermilion};
    color: ${COLOR.vermilion};
    i {
      padding: 2px;
    }
    &:first-child {
      margin: 0 24px 0 0;
      padding: 12px 16px 12px 12px;
      filter: grayscale(1);
    }
  }
  #submit-button {
    background-color: ${COLOR.vermilion};
    color: #fff;
    font-weight: bold;
  }
`;
export default MakeForm;
