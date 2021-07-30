//used to store items from the server
import { combineReducers } from 'redux';

const items = (state = [], action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return action.payload;
    default:
      return state;
  }
};

const newItem = (
  state = {
    description: "",
    image_url: "",
  },
  action
) => {
  switch (action.type) {
    case "ADD_ITEM":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  newItem,
});
