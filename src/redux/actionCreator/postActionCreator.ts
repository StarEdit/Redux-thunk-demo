import { Action } from "../actions/postAction";
import { ActionType } from "../actionTypes/postActionType";
import { Dispatch } from "redux";

export const loadPost = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({ type: ActionType.FETCH_POST_REQUEST });

    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const responseBody = await response.json();

    dispatch({
      type: ActionType.FETCH_POST_SUCCESS,
      data: responseBody,
    });
  } catch (error: any) {
    dispatch({
      type: ActionType.FETCH_POST_ERROR,
      message: error,
    });
  }
};
