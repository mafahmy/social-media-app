import {
    RECEIVE_QUESTIONS,
    ADD_ANSWER_TO_QUESTION,
    ADD_QUESTION
} from '../actions/questions'
export default function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        
        case ADD_ANSWER_TO_QUESTION:
            const { authedUser, qid, answer } = action;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat(authedUser)
                    }
                }
            }

        case ADD_QUESTION:
            //const { question } = action;

            return {
                ...state,
                [action.question.id]: action.question
            }
        default:
            return state;
    }
}
// const questions = (state={}, action) => {
//     switch (action.type) {
//         case RECEIVE_QUESTIONS:
//             return {
//                 ...state,
//                 ...action.questions
//             }

//         case SAVE_NEW_QUESTION:
//             return {
//                 ...state,
//                 [action.question.id]: action.question
//             }

//         case SAVE_ANSWER:
//             return {
//                 ...state,
//                 [action.qid]: {
//                     ...state[action.qid][action.answer],
//                     votes: state[action.qid][action.answer].votes.concat([action.authedUser])
//                 }
//             }
//         default:
//             return state
//     }
// }
// export default questions;