import { receiveUsers } from "./users";
import { getIntialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleIntialData() {
  return async (dispatch) => {
    dispatch(showLoading());
    return getIntialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));

      dispatch(hideLoading());
    });
  };
}
