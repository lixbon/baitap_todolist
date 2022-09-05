import { ADD_TODO, DONE_TODO, REMOVE_TODO } from "../Constants/todoConstants";
import { nanoid } from "nanoid";

const initialState = {
  todoList: [],
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
      let index = state.todoList.findIndex((item) => {
        return item.id == action.payload;
      });

      if (index !== -1) {
        cloneToDoList.splice(index, 1);
      }

      state.todoList = cloneToDoList;
      return { ...state };
    }
    case DONE_TODO: {
      let index = state.todoList.findIndex((item) => {
        return item.id == action.payload;
      });
      let cloneToDoList = [...state.todoList];
      if (index !== -1) {
        cloneToDoList[index].isDone = true;
      }
      state.todoList = cloneToDoList;
      return { ...state };
    }
    default:
      return state;
  }
};
