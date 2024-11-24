import {
  SET_TODOS,
  ADD_NEW_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../actions/actions";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.payload;

    case ADD_NEW_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      return state.filter((item) => item.id != action.payload);

    case TOGGLE_TODO:
      return state.map((item, index) =>
        item.id == action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    default:
      return state;
  }
};

export default todoReducer;
