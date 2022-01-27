import { ActionType } from "../actionTypes/postActionType";

interface LoadAction {
  type: ActionType.FETCH_POST_REQUEST;
}

interface SuccessAction {
  type: ActionType.FETCH_POST_SUCCESS;
  data: [];
}

interface ErrorAction {
  type: ActionType.FETCH_POST_ERROR;
  message: any;
}

export type Action = LoadAction | SuccessAction | ErrorAction;
