import {EMAIL_CHANGED} from './types'
import {PASS_CHANGED} from './types'

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