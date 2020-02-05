import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from "./layout.jsx";
import Profile from './profile.jsx';

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={ Layout } />
                <Route exact path='/profile/' component={ Profile } />
                <Route
                    exact
                    path='/chat/:chatId/'
                    render={ obj => <Layout
                        chatId={ Number(obj.match.params.chatId) }
                    />
                    }
                />
            </Switch>
        )
    }
}
