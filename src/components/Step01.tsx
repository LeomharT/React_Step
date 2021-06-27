import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Current, PersonInfoStore } from '../redux/store';

interface isState
{
    disabledNext: boolean;
}

export default class Step01 extends Component<{}, isState>
{
    constructor(props: any)
    {
        super(props);
        this.state = {
            disabledNext: true,
        };
    }
    checkName = (e: any) =>
    {
        if (e.target.value !== "") { this.setState({ disabledNext: false }); }
    };
    nextStep = () =>
    {
        let input = this.refs.name as Input;
        PersonInfoStore.dispatch({
            type: "AddInfo",
            data: {
                name: "name",
                value: input.state.value
            }
        });
        Current.dispatch({
            type: "NextStep"
        });
    };
    render()
    {
        return (
            <>
                <Input defaultValue={
                    PersonInfoStore.getState().get("name")?.toString()
                }
                    placeholder="Enter Your Name"
                    ref="name"
                    onChange={this.checkName}
                />
                <Button
                    disabled={this.state.disabledNext}
                    type="primary"
                    style={{ float: "right", marginTop: "20px" }}
                    onClick={this.nextStep}
                >
                    <Link to="/step02">Next</Link>
                </Button>
            </>
        );
    }
}
