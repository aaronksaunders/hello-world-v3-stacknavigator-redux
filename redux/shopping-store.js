import React from "react";

export const SET_CURRENT_ITEM = "SET_CURRENT_ITEM";

const initialState = {
  // list data for FlatList to render
  listData: [
    { key: "user1", name: "Aaron Saunders" },
    { key: "user2", name: "Andrea Saunders" },
    { key: "user3", name: "Bryce Saunders" }
  ],
  // which item is selected
  currentItem: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_ITEM: {
      const { item } = action.payload;
      return {
        ...state,
        currentItem: item
      };
    }

    default:
      return state;
  }
}
