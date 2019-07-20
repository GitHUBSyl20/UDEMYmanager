import { EMAIL_CHANGED } from './types';
import { PASS_CHANGED } from './types';
import { LOGIN_USER_SUCCES } from './types';
import { LOGIN_USER_FAIL } from './types';

import firebase from 'firebase'

//cette action est diaptché dans tous les réducers et si ca colle avec un case alors se déclenche l'action codé
export const emailChanged=text=>{
    return{
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passChanged=text=>{
    return{
        type: PASS_CHANGED,
        payload: text
    }
}

export const loginUser =({email, pass})=>{
    //redux thunk sees we return a function and we cannot immediatly return an action. 
    //so it makes a manual dispatch AFTER we get the information we need
    //dispatch is a method used as an argument
    return(dispatch)=>{
        //some asynchronous action is going to happen and we cannot return an action immediatly
         firebase.auth().signInWithEmailAndPassword(email,pass)
         //AFTER the request is complete we mannually call the action and dispatch it. 
         //In any case for action creator there is an automatic dispatch
        .then(user=>loginUserSuccess(dispatch, user))
    .catch(()=>{
          firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(user=>loginUserSuccess(dispatch, user))
        .catch(()=>LoginUserFail(dispatch))
    })
}
}

const loginUserSuccess =  (dispatch, user)=>{
    dispatch({
        //dispatching action in reducers
        type: LOGIN_USER_SUCCES,
        payload: user
    })
}

const LoginUserFail = (dispatch)=>{
    dispatch({ type: LOGIN_USER_FAIL})
}

//with redux thunk: 
//action creator are function that return a function . this function will be called with dispatch