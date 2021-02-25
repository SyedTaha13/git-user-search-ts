import SEARCH_USER from '../constants/searchUser'
import {Action} from '../../types/reduxTypes'


const searchUserInitialState = {
    data: null,
    isLoading:false,
    err: null,
}

const searchUserReducer = (state=searchUserInitialState,action:Action) =>{

    switch (action.type) {
        case SEARCH_USER.LOADING:
            return{
                ...state,
                isLoading: true
            }
        case SEARCH_USER.SUCCESS:
            return{
                ...state,
                data: action.payLoad,
                isLoading: false,
                err: null
            }
        case SEARCH_USER.FAILURE:
            return{
                ...state ,
                isLoading: false ,
                err: action.err
            }
        case SEARCH_USER.CLEAR:
            return{
                data: action.payLoad,
                isLoading:false,
                err: null,
            }
        default: return state
    }
}

export {
    searchUserReducer
}