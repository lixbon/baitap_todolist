import { ADD_TODO, DONE_TODO, REMOVE_TODO } from "../Constants/todoConstants";
import { nanoid } from "nanoid";

const initialState = {
  todoList: [],
  doneList: [],
};

export let todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      let content = document.getElementById("input-id").value;
      if (content != "") {
        document.getElementById("span-input").innerText = "";
        let id = nanoid();
        let todo = { id, content, isDone: false };
        let cloneToDoList = [...state.todoList];
        cloneToDoList.push(todo);
        state.todoList = cloneToDoList;
        document.getElementById("input-id").value = "";
        return { ...state };
      } else {
        document.getElementById("span-input").innerText = "To do cant be blank";
      }
    }
    case REMOVE_TODO: {
      let cloneToDoList = [...state.todoList];
      let clonedoneList = [...state.doneList];
      let index = state.todoList.findIndex((item) => {
        return item.id == action.payload;
      });
      let indexdone = state.doneList.findIndex((item) => {
        return item.id == action.payload;
      });
      if (index !== -1) {
        cloneToDoList.splice(index, 1);
      }
      if (indexdone !== -1) {
        clonedoneList.splice(indexdone, 1);
      }
      state.todoList = cloneToDoList;
      state.doneList = clonedoneList;
      return { ...state };
    }
    case DONE_TODO: {
      let index = state.todoList.findIndex((item) => {
        return item.id == action.payload;
      });
      let clonedoneList = [...state.doneList];
      let cloneToDoList = [...state.todoList];
      if (index !== -1) {
        state.todoList[index].isDone = true;
        clonedoneList.push(state.todoList[index]);
        cloneToDoList.splice(index, 1);
      }
      state.doneList = clonedoneList;
      state.todoList = cloneToDoList;
      return { ...state };
    }
    default:
      return state;
  }
};
