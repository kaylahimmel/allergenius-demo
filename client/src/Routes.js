import React from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './auth/Home';
import Callback from './auth/Callback';
import Auth from './auth/auth';
import history from './auth/history';
import App from './App';
import HomePage from './pages/HomePage/HomePage';
import ReactionForm from './pages/Forms/ReactionForm';
import EditProfile from './pages/Forms/EditProfile';
import AddProfile from './pages/Forms/AddProfile';
import ReactionPage from "./pages/ReactionPage/ReactionPage";


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication(); 
  }
}

const Routes = () => (
  <Router history={history} component={Home}>
    <div>
      <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
      <Route path="/App" render={(props) => <App auth={auth} {...props} />} />
      <Route path="/editprofile" render={(props) => <EditProfile auth={auth} {...props} />} />
      <Route path="/addprofile" render={(props) => <AddProfile auth={auth} {...props} />} />
      <Route path="/reactionform" render={(props) => <ReactionForm auth={auth} {...props} />} />
      <Route path="/reactions" render={(props) => <ReactionPage auth={auth} {...props} />} />
      <Route path="/home" render={(props) => <HomePage auth={auth} {...props} />} />
      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} />
      }}/>
    </div>
  </Router>
);

export default Routes;