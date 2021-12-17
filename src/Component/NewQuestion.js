import React from "react";
import { Grid, GridColumn, Card, Divider } from "semantic-ui-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleSaveQuestion } from "../actions/questions";

const NewQuestion = (props) => {
  const [options, setOptions] = useState({
    optionOne: "",
    optionTwo: "",
  });
  const { optionOne, optionTwo } = options;
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);
  const [toHome, setToHome] = useState(false);

  const handleChange = (e) => {
    if (e.target.id === "optionOne") {
      setOptions({
        ...options,
        optionOne: e.target.value,
      });
    } else {
      setOptions({
        ...options,
        optionTwo: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleSaveQuestion(optionOne, optionTwo, authedUser.value));
    console.log(optionTwo, authedUser.value);

    setOptions({
      optionOne: "",
      optionTwo: "",
    });
    setToHome(true);
  };

  if (toHome) return <Redirect to="/" />;

  return (
    <div className="new-question">
      <Grid centered columns={2}>
        <GridColumn>
          <Card fluid>
            <Card.Content>
              <h1>
                <Card.Header textAlign="center">
                  {" "}
                  Create new question{" "}
                </Card.Header>{" "}
              </h1>
              <form>
                <h2>Would you rather</h2>
                <label htmlFor="optionOne">
                  <input
                    type="text"
                    placeholder="flower"
                    name="optionOne"
                    id="optionOne"
                    onChange={handleChange}
                    value={options.optionOne}
                  ></input>
                </label>
                <Divider horizontal>Or</Divider>
                <label htmlFor="optionTwo">
                  <input
                    type="text"
                    placeholder="butterfly"
                    name="optionTwo"
                    id="optionTwo"
                    onChange={handleChange}
                    value={options.optionTwo}
                  ></input>
                </label>
                <button
                  className="login-button"
                  onClick={handleSubmit}
                  disabled={optionOne === "" || optionTwo === ""}
                >
                  SUBMIT
                </button>
              </form>
            </Card.Content>
          </Card>
        </GridColumn>
      </Grid>
    </div>
  );
};
export default NewQuestion;
