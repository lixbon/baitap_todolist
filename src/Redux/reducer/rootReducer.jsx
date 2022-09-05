import { combineReducers } from "redux";
import { todoListReducer } from "./todoReducer";

export const rootReducer_todoList = combineReducers({
  todoListReducer: todoListReducer,
});
