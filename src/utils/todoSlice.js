import { createSlice } from "@reduxjs/toolkit";

// const getInitialTodo = () => {
//   // getting todo list
//   const localTodoList = window.localStorage.getItem("todoList");
//   // if todo list is not empty
//   if (localTodoList) {
//     return JSON.parse(localTodoList);
//   }
//   window.localStorage.setItem("todoList", []);
//   return [];
// };

// const initialValue = {
//   filterStatus: "all",
//   SearchData:[],
//   todoList: [],
// };

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    filterStatus: "all",
    searchData: "",
    todoList: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.todoList.push(action.payload);
    },
    updateItem: (state, action) => {
        state.todoList.forEach((res) => {
            if(res.id === action.payload[0]) 
            res.todoitem = action.payload[1];
       });
      },
    searchItem: (state, action) => {
        state.searchData = action.payload;
    },
    removeItem: (state, action) => {
        state.todoList = state.todoList.filter((res) => {
            return  res.id !== action.payload});
    },
    setStatus: (state, action) => {
        state.todoList.forEach((res) => {
             if(res.id === action.payload[0]) 
             res.stat = action.payload[1];
        });
    },
    updateStatus: (state, action) => {
       state.filterStatus = action.payload;
    }
  },
});

export const { addItem, removeItem, searchItem, updateItem, setStatus, updateStatus } = todoSlice.actions;

export default todoSlice.reducer;
