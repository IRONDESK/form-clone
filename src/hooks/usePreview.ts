import { useSelector } from "react-redux";
import { RootState } from "../app/store";

function usePreview() {
  const data = useSelector((state: RootState) => state.Preview);
  return { data };
}

export default usePreview;
