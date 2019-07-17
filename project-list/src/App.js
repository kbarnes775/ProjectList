import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import {setCurrentUser, logoutUser} from './actions/authentication';
import './styles/App.scss'
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main'
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFound from './components/NotFound/NotFound';
import CreateProject from "./components/CreateProject/CreateProject";
import Footer from "./components/Footer/Footer";


if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login'
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path='/create-project' component={CreateProject}/>
                        <Route component={NotFound}/>
                    </Switch>
                    <Footer/>
                </Router>
            </Provider>
        );
    }
}

export default App;
