import {EMAIL_CHANGED} from '../actions/types'
import {PASS_CHANGED} from '../actions/types'


const INITIAL_STATE = {email: '', password:''}
//initial state should never be undefined because all reducers are run throught at the render of the component
export default (state=INITIAL_STATE, action)=>{
    console.log("email reducer", action.payload)
    switch(action.type){
        //avoiding typo by defining variables holding action types
        case EMAIL_CHANGED:
        //{...state} produit un nouvel objet à partir de l'existant {email: ''}
        //ce nouvel objet est différent de celui de départ et donc il y'a action du reducer
            return  {...state, email: action.payload}
        case PASS_CHANGED:
            return {...state, password: action.payload}
        default:
           return state
    }
}