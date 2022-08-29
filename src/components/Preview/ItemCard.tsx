import styled from "styled-components";

import { COLOR } from "../../styles/constants";

function ItemCard({
  itemId = 999,
  register,
  setValue,
  type,
  question,
  option,
  isDefault,
  hasEtc,
}: {
  itemId: number;
  register: any;
  setValue: any;
  type: any;
  question: any;
  option: any;
  isDefault: any;
  hasEtc: any;
}) {
  return (
    <Container onClick={() => setValue(`items.${itemId}.question`, question)}>
      <ItemHead>
        {question}
        {isDefault ? (
          <i className="material-icons">
            check <strong>필수</strong>
          </i>
        ) : null}
      </ItemHead>
      {type === "radio" || type === "select" ? (
        <Options>
          {option?.map((el: string, index: number) => (
            <li key={index}>
              <label>
                <input
                  type={type === "select" ? "checkbox" : type}
                  value={el}
                  {...register(`items.${itemId}.answer`, {
                    required: isDefault,
                  })}
                />{" "}
                {el}
              </label>
            </li>
          ))}
        </Options>
      ) : type === "drop" ? (
        <Select
          name={itemId}
          {...register(`items.${itemId}.answer`, {
            required: isDefault,
          })}
        >
          {option?.map((el: string, index: number) => (
            <option key={index} value={el}>
              {el}
            </option>
          ))}
        </Select>
      ) : type === "short" ? (
        <InputWrap>
          <input
            type="text"
            {...register(`items.${itemId}.answer`, {
              required: isDefault,
            })}
          />
        </InputWrap>
      ) : type === "long" ? (
        <InputWrap>
          <textarea
            name={itemId}
            {...register(`items.${itemId}.answer`, {
              required: isDefault,
            })}
          ></textarea>
        </InputWrap>
      ) : null}
    </Container>
  );
}

const Container = styled.article`
  margin: 24px 20px;
  box-shadow: 0 6px 8px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;
const ItemHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  width: 100%;
  background-color: ${COLOR.grey};
  font-size: 1.5rem;
  font-weight: 500;
  i {
    display: flex;
    align-items: center;
    gap: 4px;
    strong {
      font-size: 1rem;
    }
  }
`;
const Options = styled.ul`
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 16px;
  font-size: 1.1rem;
`;
const Select = styled.select`
  margin: 24px;
  padding: 4px 8px;
  width: 60%;
  font-size: 1.1rem;
`;
const InputWrap = styled.div`
  input,
  textarea {
    margin: 24px;
    padding: 4px 8px;
    width: 60%;
    font-size: 1.1rem;
  }
`;

export default ItemCard;
