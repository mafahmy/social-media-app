import React, { useEffect } from 'react'
import { handleIntialData } from './actions/shared'
import { useDispatch, useSelector } from 'react-redux';

import Nav from './Component/Nav'

import Home from './Component/Home';
import LeaderBoard from './Component/LeaderBoard';
import NewQuestion from './Component/NewQuestion';
import Question from './Component/Question';
import Login from './Component/Login';
import { 
  BrowserRouter as Router,
  Route,
  
 } from 'react-router-dom'



function App() {

  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser)
  useEffect(() => {
    dispatch(handleIntialData());
  }, [dispatch]);
  return (
    
    <div className="">
        <Router>
          {authedUser === null  ? (
            <div>
              <Login />
             
            </div>
          ) : (
            <div>
              <Nav />
              <Route path='/login' component={Login} />
              <Route path='/leaderboard' component={LeaderBoard} />
              <Route path='/add' component={NewQuestion} />
              <Route path='/question/:id' component={Question} />
              <Route path='/' exact component={Home} />
            </div>
          )}
        </Router>
      
      
    </div>
  );
}

export default App;
