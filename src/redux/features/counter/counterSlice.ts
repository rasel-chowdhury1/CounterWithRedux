import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TIntialState = {
  count: number
}
const initialState: TIntialState = {
  count: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    }
  }
})

export const {increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;