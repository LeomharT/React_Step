import React, { Component } from 'react';
import styled from 'styled-components';
import { Select, Button } from 'antd';
import { PersonInfoStore } from '../redux/store';

const MyPage2 = styled.div`
width:85vw;
height:50px;
margin:0 auto;
`;
const { Option } = Select;
interface isState
{
    gender: string;
}
export default class Page2 extends Component<any, isState>
{
    constructor(props: any)
    {
        super(props);
        this.state = {
            gender: ""
        };
    }
    onChange = (e: any) =>
    {
        this.setState({
            gender: e
        });
    };
    onClick = () =>
    {
        PersonInfoStore.dispatch({
            type: "AddInfo",
            data: { name: "gender", value: this.state.gender }
        });
    };
    render()
    {
        return (
            <MyPage2>
                <Select placeholder="Chose Your Gender" id="gender" onChange={this.onChange}>
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                </Select>
                <Button type="primary" onClick={this.onClick}>确定</Button>
            </MyPage2>
        );
    }
};
