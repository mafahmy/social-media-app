import { saveQuestionAnswer } from "../utils/api";
import { addAnswerToQuestion } from "./questions";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addAnwerToUser({ authedUser, qid, answer }) {
  return {
    type: ADD_ANSWER_TO_USER,
    authedUser,
    qid,
    answer,
  };
}

export function addQuestionToUser({ id, author }) {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author,
  };
}

export function handleSaveAnswer(authedUser, qid, answer) {
  return async (dispatch) => {
    dispatch(addAnwerToUser(authedUser, qid, answer));
    dispatch(
      addAnswerToQuestion(
        authedUser.authedUser,
        authedUser.qid,
        authedUser.answer
      )
    );

    try {
      return await saveQuestionAnswer(
        authedUser.authedUser,
        authedUser.qid,
        authedUser.answer
      );
    } catch (e) {
      console.warn("Error in handleSaveAnswer: ", e);
    }
  };
}
