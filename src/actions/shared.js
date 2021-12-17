import { receiveUsers } from './users'
import { getIntialData } from '../utils/api'
import { receiveQuestions } from './questions'
//import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

//const AUTHED_ID = 'tylermcginnis';



export function handleIntialData() {
    return async (dispatch) => {
        
        
        dispatch(showLoading())
        return getIntialData().then(({ users, questions}) => {
            dispatch(receiveQuestions(questions));
            dispatch(receiveUsers(users));
            
            dispatch(hideLoading())
        })
        
      
    }
}


// export function saveNewQuestion(question) {
//     return ({
//         type: SAVE_NEW_QUESTION,
//         question
//     })
// }

// export function handleSaveNewQuetion(question) {
//     return async (dispatch) => {
//         dispatch(showLoading())
//         const savedQuestion = await _saveQuestion(question)
//         dispatch(saveNewQuestion(savedQuestion))
//         dispatch(hideLoading())
//     }
// }
