import CURRENT_DATA from '../constants/currentData'
import {Action} from '../../types/reduxTypes'


const currentDataInitialState = {
    data: null
}

const currentDataReducer = (state=currentDataInitialState,action: Action) =>{

    switch (action.type) {
        case CURRENT_DATA.SET:
            return{
                ...state,
                data: action.payLoad
            }
        case CURRENT_DATA.CLEAR:
            return{
                ...state,
                data: action.payLoad
            }
        default: return state
    }
}

export {
    currentDataReducer
}