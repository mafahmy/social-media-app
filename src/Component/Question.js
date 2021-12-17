import React from "react";
import { useSelector } from "react-redux";
import QuestionBody from "./QuestionBody";
import ResultCard from "./ResultCard";
import { Card, Image, Grid, GridColumn} from 'semantic-ui-react'

const Question = ( { match } ) => {

    const isEmpty = (obj) => Object.keys(obj).length === 0;
    const users = useSelector((state) => state.users);
    const authedUser = useSelector((state) => state.authedUser);
    const questions = useSelector((state) => state.questions);
    const { id } = match.params; 
    const { author} = questions[id];
    if(isEmpty(users)) return null;

    return(
        <div>
            <Grid  centered columns={2}>
                <GridColumn>
            <Card fluid>
            <Card.Content>
                <Image
                    floated="right"
                    size="small"
                    src={users[author].avatarURL}
                />
            <Card.Header >
            
             <h1> {users[questions[id].author].name} asks</h1>
            
            </Card.Header>

            
                {/* {questions[id].optionOne.votes.includes(authedUser.value) || 
                questions[id].optionTwo.votes.includes(authedUser.value)} */}

                  
                <Card.Description >
                <QuestionBody
                    authedUser={authedUser}
                    id={id}
                    questions={questions}
                    />
                
                
                <ResultCard
                    optionOne={questions[id].optionOne}
                    optionTwo={questions[id].optionTwo}
                    authedUser={authedUser}
                    /> 
               

               </Card.Description>
            </Card.Content>
            </Card>
            </GridColumn>
            </Grid>
        </div>
    )
}
export default Question;