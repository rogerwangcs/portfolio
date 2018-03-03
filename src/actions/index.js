import {ACTIONS} from "utils/action-types";

export const actions = {
  addPost: post => ({type: ACTIONS.ADD_POST, payload: post}),
  setCurrentPostIndex: index => ({type: ACTIONS.SET_CURRENT_POST_INDEX, index: index})
}