import INPUT_FIELD from '../constants/inputField'
import {Action} from '../../types/reduxTypes'


const inputFieldInitialState = {
    text: ''
}

const inputFieldReducer = (state=inputFieldInitialState,action: Action) =>{

    switch (action.type) {
        case INPUT_FIELD.SET_TEXT:
            return{
                ...state,
                text: action.payLoad
            }
        default: return state
    }
}

export {
    inputFieldReducer
}