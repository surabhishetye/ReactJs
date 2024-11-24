export const SET_TODOS = "SET_TODOS";
export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const setTodos = (data) => ({
  type: SET_TODOS,
  payload: data,
});

export const addNewTodo = (newTodo) => ({
  type: ADD_NEW_TODO,
  payload: newTodo,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});
