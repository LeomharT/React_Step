import React, { Component } from 'react';
import { PersonInfoStore } from '../redux/store';


interface ResultState
{
    personalInfo: FormData;
}
export default class Result extends Component<{}, ResultState>
{

    constructor(props: Result)
    {
        super(props);
        this.state = {
            personalInfo: PersonInfoStore.getState(),
        };
    }
    render()
    {
        return (
            <div style={{ textAlign: "center" }}>
                Your Name Is : {this.state.personalInfo.get("name")}
                <br />
                Your Gender IS :{this.state.personalInfo.get('gender')}
            </div>
        );
    }
}
