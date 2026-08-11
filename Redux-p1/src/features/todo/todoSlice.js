import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: ["learn Redux toolkit", "build a redux App"],
  },
  reducers:{
    addTodo: (state, action)=>{
        state.items.push(action.payload);
    },
    deleteTodo: (state, action)=>{
        state.items.splice(state.items.indexOf(action.payload),1);
    }
  },  
});

export const {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;

