import React, { Component } from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';
import { PersonInfoStore } from '../redux/store';

const MyPage1 = styled.div`
width:85vw;
height:50px;
margin:0 auto;
`;

export default class Page1 extends Component
{
    onClick = () =>
    {
        let name = document.getElementById("Name") as HTMLInputElement;
        PersonInfoStore.dispatch({
            type: "AddInfo",
            data: {
                name: "name", value: name.value
            }
        });
    };
    render()
    {
        return (
            <MyPage1>
                <Input placeholder='Enter Your Name Here' id="Name"></Input>
                <Button type='primary' onClick={this.onClick}>确定</Button>
            </MyPage1>
        );
    }
}
