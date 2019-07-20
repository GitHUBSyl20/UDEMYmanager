import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passChanged, loginUser } from '../actions/index'
import { Card, CardSection, Input, Button } from '../component/commons'

class LoginForm extends Component {
    onEmailChange(text){
        //the event handler call the action creator
       this.props.emailChanged(text)
    }

    onPassChange(text){
        this.props.passChanged(text)
    }

    onLoginUser(){       
        const{email, pass}=this.props
        console.log("log in user ", email)
        this.props.loginUser({email, pass})
    }

    renderError(){
        if(this.props.error){
            return(
                <View style={{backgrounColor: 'white'}}>
                    <Text style ={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
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
                    value={this.props.pass}
                    />
                </CardSection>
                {this.renderError()}

                <CardSection>
                    <Button
                    onPress={()=>this.onLoginUser()}>
                    Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles= {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color:'red'
    }
}

const mapStateToProps=({auth})=>{ 
    console.log("looking for error", email);
    const { email, pass, error, loading } = auth;
    return { email, pass, error, loading };
};

const mapDispatchToProps = (dispatch) => {
    return {
        emailChanged: (email) => {
            dispatch(emailChanged(email))
        },
        passChanged: (pass) => {
            dispatch(passChanged(pass))
        },
        loginUser: (email, pass) => {
            dispatch(loginUser(email, pass))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
