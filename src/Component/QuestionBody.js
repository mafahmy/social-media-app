import React, { useState } from "react";
import { handleSaveAnswer } from "../actions/users";
import { useDispatch } from "react-redux";
import { Button, Divider } from "semantic-ui-react";

const QuestionBody = ({ authedUser, id, questions }) => {
  console.log("authedUser: ", authedUser);
  console.log("id: ", id);
  console.log("questions: ", questions);

  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const auth_user = authedUser.value;

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log("value = ", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      handleSaveAnswer({
        authedUser: auth_user,
        qid: id,
        answer: value,
      })
    );
  };

  return (
    <div>
      <h2>Would you rather</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="optionOne">
          <input
            type="radio"
            name="option"
            id="optionOne"
            value="optionOne"
            onChange={handleChange}
          />
          {questions[id].optionOne.text}
        </label>

        <label htmlFor="optionTwo">
          <input
            type="radio"
            name="option"
            id="optionTwo"
            value="optionTwo"
            onChange={handleChange}
          />
          {questions[id].optionTwo.text}
        </label>
        <Divider></Divider>
        <Button color="blue" type="submit" disabled={value === ""}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default QuestionBody;
