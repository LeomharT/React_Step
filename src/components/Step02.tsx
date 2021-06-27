import { Button, Select } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Current, PersonInfoStore } from '../redux/store';

const { Option } = Select;


interface isState
{
    disabledNext: boolean;
    gender: string;
}

export default class Step02 extends Component<{}, isState>
{
    constructor(props: any)
    {
        super(props);
        this.state = {
            disabledNext: true,
            gender: ""
        };
    }
    selectGender = (e: string) =>
    {
        this.setState({
            disabledNext: false,
            gender: e
        });
    };
    nextStep = () =>
    {
        PersonInfoStore.dispatch({
            type: "AddInfo",
            data: {
                name: "gender",
                value: this.state.gender
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
                <Select placeholder="Gender"
                    style={{ width: "200px", left: "50%", marginLeft: "-100px" }}
                    onChange={this.selectGender}
                >
                    <Option value="male" >male</Option>
                    <Option value="female" >female</Option>
                </Select>
                <br />
                <Button><Link to='/step01' onClick={() => { Current.dispatch({ type: "PreviousStep" }); }}>Previous</Link></Button>
                <Button
                    disabled={this.state.disabledNext}
                    style={{ float: "right" }}
                    onClick={this.nextStep}
                    type="primary"
                >
                    <Link to='result'>Next</Link>
                </Button>
            </>
        );
    }
}
