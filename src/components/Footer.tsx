import React, { Component } from 'react';
import { Button, message } from "antd";
import styled from 'styled-components';
import { Current } from '../redux/store';
import { Link } from "react-router-dom";

const MyFooter = styled.div`
width:85vw;
height:50px;
margin:0 auto;
margin-top:30px;
`;

interface isState
{
    path: string;
}
export default class Footer extends Component<any, isState>
{
    constructor(props: any)
    {
        super(props);
        this.state = {
            path: "/Page2"
        };
    }
    NextStep = () =>
    {
        let current = Current.getState();
        switch (current)
        {
            case 0: {
                Current.dispatch({
                    type: "NextStep"
                });
                this.setState({
                    path: "/Page3"
                });
                break;
            }
            case 1: {
                Current.dispatch({
                    type: "NextStep"
                });
                break;
            }
            case 2: {
                message.success("Success");
                break;
            }
            default:
                return;
        }
    };
    render()
    {
        return (
            <MyFooter>
                <Button onClick={this.NextStep}><Link to={this.state.path}>Next</Link></Button>
            </MyFooter>
        );
    }
}
