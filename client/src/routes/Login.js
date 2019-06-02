import React from 'react';
import {extendObservable} from 'mobx';
import {observer} from 'mobx-react';
import { Button, Input} from 'antd';

export default observer(class Login extends React.Component{
    constructor(props){
        super(props);

        extendObservable(this, {
            email: '',
            password: '',
        });
    }

    onSubmit = () => {
        const {email, password} = this;
        console.log(email);
        console.log(password);
    }

    onChange = event => {
        const {name, value} = event.target;
        this[name] = value;
    };

    render(){
        const {email, password} = this;
        return(
           <div>
                <h2>Welcom to Login page</h2>
                <Input name="email" onChange={this.onChange} value={email} placeholder="Email"/>
                <Input name="password" onChange={this.onChange} value={password} type="password" placeholder="Password"/>
                <Button onClick={this.onSubmit}>Login</Button>
            </div>
        );
    }
});