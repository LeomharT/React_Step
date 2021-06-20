import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import
{
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import Page2 from './components/Page2';
import Page1 from './components/Page1';
import Page3 from './components/Page3';
import 'antd/dist/antd.css';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
    <Router>
        <Header />
        <Switch>
            <Route path="/Page1">
                <Page1 />
            </Route>
            <Route path="/Page2">
                <Page2 />
            </Route>
            <Route path="/Page3">
                <Page3 />
            </Route>
        </Switch>
        <Footer />
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
