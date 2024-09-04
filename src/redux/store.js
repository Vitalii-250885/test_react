import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "users/addUser":
      return {
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
