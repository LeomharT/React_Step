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
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { route } from './route/route';
import TopNavigate from './components/TopNav/TopNavigate';

const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content: space-between ;
    align-items: stretch ;
    flex-direction:column;
    div{
        box-sizing: border-box;
    }
`;
const Main = styled.div`
    width:100%;
    height:80%;
    padding:5px 50px 20px 50px;
`;


ReactDOM.render(
    <Wrapper>
        <TopNavigate />
        <Main>
            <Router>
                <Switch>
                    {
                        route.map((item, index: number) =>
                        {
                            return (
                                <Route key={index} path={item.path} component={item.components} />
                            );
                        })
                    }
                </Switch>
            </Router>
        </Main>
    </Wrapper>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();;;
