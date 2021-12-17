import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";

const QuestionTypes = ({ id }) => {
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const isEmpty = (obj) => Object.keys(obj).length === 0;

  if (isEmpty(users) || isEmpty(questions)) return null;

  const { author, optionOne } = questions[id];

  return (
    <Card fluid>
      <Card.Content>
        <Image floated="right" size="small" src={users[author].avatarURL} />
        <Card.Header>
          <h1>{users[author].name} asks </h1>
        </Card.Header>
        <Card.Meta>
          <h2>Would You rather ? </h2>
        </Card.Meta>
        <Card.Description>
          <h3>
            {optionOne.text} <strong>OR..</strong>
          </h3>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="">
          <Link to={`/question/${id}`}>
            <Button color="blue" type="submit">
              Check out
            </Button>
          </Link>
        </div>
      </Card.Content>
    </Card>
  );
};
export default QuestionTypes;
