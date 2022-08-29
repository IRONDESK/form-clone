import styled from "styled-components";
import { COLOR } from "../../styles/constants";

function ItemOption({
  fields,
  type,
  order,
  index,
  swap,
  remove,
  register,
}: any) {
  return (
    <Container>
      <TypeIcon type={type}>{type === "drop" && index + 1 + "."}</TypeIcon>
      <Input
        placeholder={`옵션${index + 1}`}
        autoFocus={true}
        onFocus={(e) => e.target.select()}
        {...register(`items[${order}].option.${index}`)}
      />
      <Delete
        type="button"
        onClick={() => {
          if (fields.length === 1)
            alert("최소 1개 이상의 옵션이 있어야 합니다.");
          else {
            remove(index);
          }
        }}
      >
        <img src="/icons/clear_black_24dp.svg" alt="삭제" />
      </Delete>
      <Swap>
        {index === 0 ? null : (
          <button type="button" onClick={() => swap(index, index - 1)}>
            <img src="/icons/expand_less_black_24dp.svg" alt="옵션 위치 위로" />
          </button>
        )}
        {index === fields.length - 1 ? null : (
          <button type="button" onClick={() => swap(index, index + 1)}>
            <img
              src="/icons/expand_more_black_24dp.svg"
              alt="옵션 위치 아래로"
            />
          </button>
        )}
      </Swap>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  margin: 20px 0 16px;
  align-items: center;
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
const Input = styled.input`
  flex: 2;
  padding: 4px 2px;
  outline: none;
  border: none;
  border-bottom: 1px solid ${COLOR.middleGrey};
  font-size: 1.05rem;
  transition: all 0.3s;
  &:focus {
    border-bottom: 2px solid ${COLOR.vermilion};
  }
`;
const Delete = styled.button`
  opacity: 0.5;
  transform: scale(0.8);
  &:hover {
    opacity: 1;
  }
`;
const Swap = styled.div`
  width: 76px;
  button {
    margin: 0 2px;
    padding: 1px 0;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 2px solid #000;
    text-align: center;
    opacity: 0.45;
    &:hover {
      opacity: 1;
    }
  }
`;

export default ItemOption;
