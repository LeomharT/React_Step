import React, { Component } from 'react';
import styled from 'styled-components';
import { PersonInfoStore } from '../redux/store';

const MyPage3 = styled.div`
width:85vw;
height:50px;
margin:0 auto;
`;
interface isState
{
    info: FormData;
}
export default class Page3 extends Component<any, isState>
{

    constructor(props: any)
    {
        super(props);
        this.state = {
            info: PersonInfoStore.getState()
        };
    }
    render()
    {
        return (
            <MyPage3>
                Name  : {this.state.info.get("name")}
                <br />
                Gender  : {this.state.info.get("gender")}
            </MyPage3>
        );
    }
}
