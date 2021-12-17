import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { useHistory } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

const Login = () => {
  const users = useSelector((state) => state.users);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e, { value }) => {
    setValue({ value });
  };

  const onSubmit = (e) => {
    localStorage.setItem("authedUser", value);
    dispatch(setAuthedUser(value));
    history.push("/");
  };
  const usersOption = Object.keys(users).map((user) => ({
    key: users[user].id,
    value: users[user].id,
    text: users[user].name,
    image: { avatar: true, src: users[user].avatarURL },
  }));

  return (
    <div>
      <div className="container">
        <p>Welcome to Would You Rather App </p>
      </div>
      <div className="container-sign">
        <h1>Please Sign in to Continue</h1>
      </div>
      <div className="container-drop">
        <Dropdown
          placeholder="Select user"
          fluid
          selection
          options={usersOption}
          onChange={handleChange}
        />
        <button
          className="login-button"
          onClick={onSubmit}
          disabled={value === ""}
          type="submit"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};
export default Login;
