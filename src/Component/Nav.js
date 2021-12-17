import React, { useState } from "react";
import { Menu, Image,  } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import { useDispatch, useSelector } from "react-redux";

// export default class Nav extends Component {
//   state = { activeItem: 'home' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { activeItem } = this.state
const Nav = () => {
  const authedUser = useSelector(state => state.authedUser)
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch();
  const [state, setState] = useState({ activeItem: "" });
  const handleItemClick = (e, { name }) => setState({ activeItem: name });
  const activeItem = state;
  
  const handleLogOut = () => {
    localStorage.setItem('authedUser', null)
    dispatch(setAuthedUser(null))

  }
  console.log('image : ', authedUser);
  if(!authedUser) return null;
  

  return (
    
    <Menu inverted size="huge">
      <Menu.Item
        name="home"
        as={NavLink}
        to="/"
        exact
        color="teal"
        active={activeItem === "home"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="new question"
        color="teal"
        as={NavLink}
        to="/add"
        active={activeItem === "new question"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="leaderboard"
        color="teal"
        as={NavLink}
        to="/leaderboard"
        active={activeItem === "leaderboard"}
        onClick={handleItemClick}
      />
      <Menu.Menu position="right">

        <Menu.Item
          active= {false}
          name={users[authedUser.value].name}

        />
          
        
        <Menu.Item>
          <Image 
              src={users[authedUser.value].avatarURL}
              size="mini"
              rounded
              avatar
              

          />  
        </Menu.Item>
        <Menu.Item
          name="logout"
          as={NavLink}
          to='/login'
          active={activeItem === "logout"}
          onClick={handleLogOut}
        />
      </Menu.Menu>
    </Menu>
    
  );
};
export default Nav;
