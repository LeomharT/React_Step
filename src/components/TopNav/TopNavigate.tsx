import React, { Component } from 'react';
import styled from 'styled-components';
import { Steps } from 'antd';
import { Current } from '../../redux/store';
const TopNav = styled.div`
    width:100%;
    height:20%;
    padding:20px;
`;
const { Step } = Steps;

const steps = [
    {
        title: 'Name',
        description: "Enter Your Name"
    },
    {
        title: 'Gender',
        description: 'Select Your Gender',
    },
    {
        title: 'Result',
        description: 'Show The Result',
    },
];

interface TopNavState
{
    currentStep: number;
}
export default class TopNavigate extends Component<{}, TopNavState>
{

    constructor(props: TopNavState)
    {
        super(props);
        this.state = {
            currentStep: Current.getState()
        };
        Current.subscribe(this.changeStep);
    }
    changeStep = () =>
    {
        this.setState({
            currentStep: Current.getState()
        });
    };
    render()
    {
        return (
            <TopNav>
                <Steps current={this.state.currentStep}>
                    {
                        steps.map((item: any, index: number) =>
                        {
                            return (
                                <Step key={index} title={item.title} description={item.description} />
                            );

                        })
                    }
                </Steps>
            </TopNav>
        );
    }
}
