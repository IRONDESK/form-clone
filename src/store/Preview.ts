import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPollDataInfo } from "../types/PollDataType";
const initialState: IPollDataInfo = {
  title: "",
  explain: "",
  items: [
    {
      question: "",
      type: "radio",
      option: [],
      isDefault: false,
      hasEtc: false,
    },
  ],
};

export const Preview = createSlice({
  name: "preview",
  initialState,
  reducers: {
    CreatePreview(state, action: PayloadAction<IPollDataInfo>) {
      state.title = action.payload.title;
      state.explain = action.payload.explain;
      state.items = action.payload.items;
    },
  },
});

// Action creators are generated for each case reducer function
export const { CreatePreview } = Preview.actions;

export default Preview.reducer;
