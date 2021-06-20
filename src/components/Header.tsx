import React, { Component } from 'react';
import { Steps } from 'antd';
import styled from 'styled-components';
import { Current } from '../redux/store';
const MyHeader = styled.div`
width:50vw;
height:50px;
margin:0 auto;
margin-top:50px;
margin-bottom:50px;
`;

const { Step } = Steps;


interface isState
{
    steps: any;
    current: number;
}
export default class Header extends Component<any, isState>
{
    constructor(props: any)
    {
        super(props);
        this.state = {
            steps: [
                {
                    title: 'Your Name',

                },
                {
                    title: 'Your Gender',

                },
                {
                    title: 'Result',
                },
            ],
            current: Current.getState()
        };
        Current.subscribe(this.CurrentChange);
    }
    CurrentChange = () =>
    {
        this.setState({
            current: Current.getState()
        });
    };
    render()
    {
        return (
            <MyHeader>
                <Steps current={this.state.current}>
                    {
                        this.state.steps.map((intem: any, index: number) =>
                        {
                            return (
                                <Step key={index} title={intem.title} />
                            );
                        })
                    }
                </Steps>
            </MyHeader>
        );
    }
}
