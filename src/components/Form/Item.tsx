import styled from "styled-components";
import { COLOR } from "../../styles/constants";
import ItemOption from "./ItemOption";
import TypeSelector from "./TypeSelector";

function Item({
  order,
  itemIndex,
  itemRemove,
  itemFields,
  itemInsert,
  register,
  control,
  watch,
  useFieldArray,
}: any) {
  const { fields, append, remove, swap } = useFieldArray({
    control,
    name: `items.${order}.option`,
  });
  const TypeWatch = watch(`items.${order}.type`);
  const hasEtcWatch = watch(`items.${order}.hasEtc`);
  return (
    <Container>
      <ItemHead>
        <Question
          type="text"
          placeholder="질문을 입력해주세요"
          {...register(`items.${order}.question`)}
        />
        <TypeSelector register={register} order={order} />
      </ItemHead>
      {TypeWatch === "radio" ||
      TypeWatch === "select" ||
      TypeWatch === "drop" ? (
        <OptionWrap>
          {fields?.map((item: any, index: number) => (
            <ItemOption
              key={index}
              type={TypeWatch}
              fields={fields}
              order={order}
              index={index}
              swap={swap}
              remove={remove}
              register={register}
            />
          ))}
        </OptionWrap>
      ) : null}
      <AddOptionWrap>
        {hasEtcWatch ? (
          <AddOption>
            <TypeIcon type={TypeWatch}>
              {TypeWatch === "drop" && fields.length + 1 + "."}
            </TypeIcon>{" "}
            <input type="text" value="기타..." disabled />
            <label id="del-etc-btn" htmlFor="add-etc-box">
              <img src="/icons/clear_black_24dp.svg" alt="삭제" />
            </label>
          </AddOption>
        ) : null}
        <AddOption>
          <TypeIcon type={TypeWatch}>
            {TypeWatch === "drop" && fields.length + 1 + "."}
          </TypeIcon>{" "}
          <span
            className="add-basic-option"
            onClick={() => append(["새로운 옵션"])}
          >
            옵션 추가{" "}
          </span>{" "}
          또는
          <label className="add-etc-option">
            {" "}
            '기타' 추가
            <input
              type="checkbox"
              id="add-etc-box"
              {...register(`items.${order}.hasEtc`)}
            />
          </label>
        </AddOption>
      </AddOptionWrap>
      <ItemSetting>
        <li>
          <button
            type="button"
            onClick={() => {
              itemInsert(itemIndex + 1, itemFields[itemIndex]);
            }}
          >
            <img src="/icons/content_copy_black_24dp.svg" alt="질문 복사" />
          </button>
          <button
            type="button"
            onClick={() => {
              if (itemFields.length === 1) {
                alert("최소 1개 이상의 질문이 있어야 합니다.");
              } else {
                // eslint-disable-next-line no-restricted-globals
                const isRemove = confirm("삭제하시겠습니까?");
                if (isRemove) itemRemove(itemIndex);
              }
            }}
          >
            <img src="/icons/delete_black_24dp.svg" alt="질문 삭제" />
          </button>
        </li>
        <li>
          <Default>
            필수
            <input type="checkbox" {...register(`items.${order}.isDefault`)} />
            <span>
              <span></span>
            </span>
          </Default>
        </li>
      </ItemSetting>
    </Container>
  );
}
const Container = styled.article``;
const ItemHead = styled.div`
  display: flex;
  padding: 16px 20px;
  background-color: ${COLOR.grey};
`;
const Question = styled.input`
  flex: 2;
  padding: 2px 4px;
  height: 48px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1.5rem;
  font-weight: 500;
`;

const OptionWrap = styled.ul`
  padding: 8px 16px;
`;
const AddOptionWrap = styled.ul`
  margin: -4px 0 0;
`;
const AddOption = styled.li`
  display: flex;
  margin: 0 16px 16px;
  align-items: center;
  font-size: 1.05rem;
  /* Option 선택 */
  .add-basic-option {
    margin: 0 4px 0 0;
    padding: 8px 2px;
    border-bottom: 1px solid transparent;
    cursor: text;
    color: ${COLOR.deepGrey};
    font-size: 1rem;
    &:hover {
      border-bottom: 1px solid ${COLOR.middleGrey};
    }
  }
  .add-etc-option {
    margin: 0 0 0 4px;
    padding: 8px 4px;
    color: #1063ff;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    input {
      display: none;
    }
    &:hover {
      background-color: #1064ff13;
    }
  }

  /* 기타 */
  & > input {
    padding: 4px 2px;
    outline: none;
    border: none;
    border-bottom: 1px solid ${COLOR.middleGrey};
    font-size: 1.05rem;
  }
  #del-etc-btn {
    opacity: 0.5;
    transform: scale(0.8);
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
`;

const TypeIcon = styled.div<{ type: string }>`
  margin: 0 8px;
  width: 20px;
  height: 20px;
  border: ${(props) =>
    props.type === "drop" ? "none" : `2px solid ${COLOR.middleGrey}`};
  border-radius: ${(props) => (props.type === "radio" ? "100%" : "4px")};
  transition: all 0.5s;
`;

const ItemSetting = styled.ul`
  display: flex;
  margin: 8px 20px;
  padding: 12px 8px 8px;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid ${COLOR.grey};
  button {
    margin: 0 2px;
    width: 44px;
    height: 44px;
    border-radius: 100%;
    opacity: 0.6;
    &:hover {
      background-color: ${COLOR.grey};
    }
  }
  li:last-child {
    margin: 0 0 0 8px;
    padding: 0 0 0 16px;
    border-left: 1px solid ${COLOR.deepGrey};
  }
`;
const Default = styled.label`
  display: flex;
  align-items: center;
  line-height: 1.3rem;
  input {
    display: none;
  }
  & > span {
    position: relative;
    display: inline-block;
    margin-left: 12px;
    width: 36px;
    height: 16px;
    background-color: ${COLOR.deepGrey};
    border-radius: 15px;
    transition: all 0.3s;
    cursor: pointer;
    span {
      position: absolute;
      display: inline-block;
      width: 24px;
      height: 24px;
      left: -5px;
      top: -25%;
      background-color: #fff;
      border-radius: 100%;
      box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.1);
      transition: all 0.5s;
    }
  }
  input:checked + span {
    background-color: #ff7425a2;
    span {
      background-color: ${COLOR.vermilion};
      box-shadow: 0 0 2px 3px #ff75253d;
      transform: translateX(24px);
    }
  }
`;

export default Item;
