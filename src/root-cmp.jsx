import React from 'react'

// const { Switch, Route } = ReactRouterDOM
import { Switch, Route } from 'react-router'
import routes from './routes'
import { HashRouter, Link } from "react-router-dom";


export class RootCmp extends React.Component {

    render() {
        return (
            <HashRouter basename='/'>

                <div>
                    <main>
                        <Switch>
                            {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
                        </Switch>
                    </main>
                </div>
            </HashRouter>
        )
    }
}


