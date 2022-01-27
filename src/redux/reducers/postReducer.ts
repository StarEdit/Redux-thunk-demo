import { Action } from "../actions/postAction";
import { ActionType } from "../actionTypes/postActionType";

interface posts {
  requesting: boolean;
  success: boolean;
  message: string;
  data: [];
}

const initialState: posts = {
  requesting: false,
  success: false,
  message: "",
  data: [],
};

const postReducer = (state: posts = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_POST_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case ActionType.FETCH_POST_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        data: action.data,
      };
    case ActionType.FETCH_POST_ERROR:
      return {
        ...state,
        requesting: false,
        message: action.message,
      };
    default:
      return state;
  }
};

export default postReducer;
