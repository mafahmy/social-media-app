import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react'

const QuestionTypes = ( {id}) => {
   // const authedUser = useSelector((state) => state.authedUser)
    const questions = useSelector((state) => state.questions);
    const users = useSelector((state) => state.users);
    const isEmpty = (obj) => Object.keys(obj).length === 0;

    if (isEmpty(users) || isEmpty(questions)) return null;

    //  const answered = questions[id].optionOne.votes.includes(authedUser) ||
    //      questions[id].optionTwo.votes.authedUser;


    
    
    const { author, optionOne } = questions[id];
    // return (
    //     <div>
    //         <h2>{users[author].name} asks:</h2>
    //         <h4>Would You Rather</h4>
    //         <div>
    //             {optionOne.text} OR
    //             <Link to={`/question/${id}`}>
    //                 <button type='submit'>go</button>
    //             </Link>
    //         </div>
    //     </div>
    // )
        return(
        
            <Card fluid >
            <Card.Content>
              <Image
                floated='right'
                size='small'
                src={users[author].avatarURL}
              />
              <Card.Header><h1>{users[author].name} asks </h1></Card.Header>
              <Card.Meta><h2>Would You rather ? </h2></Card.Meta>
              <Card.Description>
                  <h3>
               {optionOne.text} <strong>OR..</strong>
               </h3>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className=''>
              <Link to={`/question/${id}`}>
                     <Button color='blue'  type='submit'>Check out</Button>
     

    
                </Link>
                {/* <Button basic color='green'>
                  Approve
                </Button>
                <Button basic color='red'>
                  Decline
                </Button> */}
              </div>
            </Card.Content>
          </Card>
          
        
        )
}
export default QuestionTypes;