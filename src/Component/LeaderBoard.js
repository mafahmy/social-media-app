import React from "react";
import { useSelector } from "react-redux";
import { Card, Image, Grid, GridColumn } from "semantic-ui-react";

const LeaderBoard = (props) => {
  const users = useSelector((state) => state.users);
  const sortedUsers = Object.keys(users).sort(
    (a, b) =>
      users[b].questions.length +
      Object.keys(users[b].answers).length -
      (users[a].questions.length + Object.keys(users[a].answers).length)
  );
  console.log(sortedUsers);
  return (
    <div>
    <Grid centered columns={2}>
      <GridColumn>
    {sortedUsers.map((user, index) => (

    
      <Card fluid key={index}>
       
        <Card.Content>
        <Image
          src={users[user].avatarURL}
         
          size="small"
          floated="right"
          
        />
          <Card.Header><h1><p>{}</p>{users[user].name}</h1></Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            <h2><p>Answered: {Object.keys(users[user].answers).length} </p>
            <p>Created: {users[user].questions.length}</p></h2>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
         <h2><p>Total: {(users[user].questions.length) + (Object.keys(users[user].answers).length) }</p></h2>
        </Card.Content>
      </Card>

    ))}
    </GridColumn>
   </Grid>
    </div>

 
  );
};
export default LeaderBoard;
