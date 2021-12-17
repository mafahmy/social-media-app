import React from 'react';
import { Progress, Divider } from 'semantic-ui-react'

const ResultCard = ({optionOne, optionTwo, authedUser}) => {

    const total = optionOne.votes.length + optionTwo.votes.length;
    const isOptionOne = optionOne.votes.includes(authedUser.value);
    const isOptionTwo = optionTwo.votes.includes(authedUser.value);

    return (
        <div>
            <h1>Results</h1>
            <p>
                {optionOne.text} {isOptionOne && <span title='your vote'> That is Your vote</span>}
            </p>
            <div>
            <Progress percent={(optionOne.votes.length / total) * 100} color='blue' />
            </div>
            <p> {optionOne.votes.length} from {total} votes</p>
            <Divider></Divider>
            <p> {optionTwo.text}?{isOptionTwo && <span title='Your vote'>  Your vote </span>} </p>
            <div>
                <Progress percent={(optionTwo.votes.length / total) * 100} color='red'></Progress>

                
            </div>        
            <p>{optionTwo.votes.length} from {total}</p>
        </div>

    )
}
export default ResultCard;
