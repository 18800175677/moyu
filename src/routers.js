/**
 * @description: 
 * @author: ycz
 * @Date: 2020-07-15 10:53:10
 * @LastEditTime: 2020-07-15 13:46:03
 * @LastEditors: ycz
 */
import React from 'react';
import { Router, Route } from 'react-router';
import Index from './routes/poetry';
import Loading from './routes/Loading';
import createHistory from 'history/createBrowserHistory';
import Container from './Container';

const history = createHistory();
export const routes = [
    {
        path: '/',
        key: '/',
        name: '诗',
        component: Index
    },
    {
        path: '/loading',
        key: '/loading',
        name: '加载',
        component: Loading
    }
];

export default () => <Container
    history={history}
    routes={routes}
>
    <Router history={history}>
        {
            routes.map(item => <Route
                path={item.path}
                key={item.key}
                exact
                render={(props) => {
                    const Com = item.component;
                    return <Com {...props} history={history} />;
                }}
            />)
        }
    </Router>
</Container>;