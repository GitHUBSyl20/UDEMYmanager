import React, { Component } from 'react';
import { connect } from 'react-redux'
import { emailChanged, passChanged } from '../actions'
import { Card, CardSection, Input, Button } from '../component/commons'

class LoginForm extends Component {
    onEmailChange(text){
        //the event handler call the action creator
       this.props.emailChanged(text)
    }

    onPassChange(text){
        this.props.passChanged(text)
    }

    render() {
       
        return (
          
            <Card>
               <CardSection>
                    <Input
                    label="email"
                    placeholder="email@gmail.com"
                    //triggers a call to an ation creator imported herebefore throug the event handler
                    onChangeText={()=>this.onEmailChange()}
                    value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                    secureTextEntry
                    label="password"
                    placeholder="password"
                    onChangeText={()=>this.onPassChange()}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                    Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mstp=state=>{
    return{
        email:state.auth.email,
        pass:state.auth.pass
    }
}

export default connect(mstp, {emailChanged, passChanged})(LoginForm);