import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";
import ForgotPassword from "./components/ForgotPassword";
import AdminPage from "./components/AdminPage";
import Error404 from "./components/Error404";

import "tabler-react/dist/Tabler.css";

type Props = {||};

function App(props: Props): React.Node {
    return (
        <React.StrictMode>
            <Router>
                <Switch>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/forgot_password" component={ForgotPassword}/>
                    <Route exact path="/admin" component={AdminPage}/>
                    <Route exact path="/" component={MainPage}/>
                    <Route component={Error404} />
                </Switch>
            </Router>
        </React.StrictMode>
    );
}

export default App;
