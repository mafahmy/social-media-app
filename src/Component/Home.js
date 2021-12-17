import React from "react";
import { Tab, Grid, Menu, GridColumn } from "semantic-ui-react";
import QuestionTypes from "./QuestionsTypes";
import { useSelector } from "react-redux";
//import questions from "../reducers/questions";
//import { useEffect } from "react";
//import { useDispatch } from "react-redux";
//import { handleIntialData } from "../actions/shared";




const Home = (props) => {
  //const dispatch = useDispatch();
//  const authedUser = localStorage.getItem('authedUser');
 

  const isEmpty = (obj) => Object.keys(obj).length === 0
  const authedUser = useSelector((state) => state.authedUser)
  const questions = useSelector((state) => state.questions);
  const allQuestions = Object.keys(questions).sort((a, b) => { 
    return questions[b].timestamp - questions[a].timestamp;
  })

  const answered = allQuestions.filter((answer) => 
  [
    ...questions[answer].optionOne.votes,
    ...questions[answer].optionTwo.votes,
  ].includes(authedUser.value)
    ? questions[answer]
    : null
  );
  const unAnswered = allQuestions.filter((answer) =>
  [
    ...questions[answer].optionOne.votes,
    ...questions[answer].optionTwo.votes,
  ].includes(authedUser.value) 
    ? null
    : questions[answer]
  )
 


  const panes = [
    { menuItem: "Answered", render: () => <Tab.Pane> {answered.map((key) => {
      const { id } = questions[key]
      return <QuestionTypes key={id}  id={key} />
    })}  </Tab.Pane> },
    { menuItem: "Unanswered", render: () => <Tab.Pane> {unAnswered.map((key) => {
      const { id } = questions[key]
      return <QuestionTypes key={id} id={key} />
    })} </Tab.Pane> },
  ];
  if(isEmpty(questions)) return null
  return (
    <div>
      <Grid centered columns={2}>
        <GridColumn>
          <Menu  widths={2} >
            <Tab 
              
              className="tab"
              menu={{ inverted: true, tabular: true }}
              panes={panes} defaultActiveIndex={1}
            />
          </Menu>
        </GridColumn>
      </Grid>
    </div>
  );
};

export default Home;
