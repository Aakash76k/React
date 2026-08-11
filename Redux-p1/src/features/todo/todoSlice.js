import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: ["learn Redux toolkit", "build a redux App"],
  },
  reducers:{
    addTodo: (state, action)=>{
        state.iyems.push(action.payload);
    },
  },
});


