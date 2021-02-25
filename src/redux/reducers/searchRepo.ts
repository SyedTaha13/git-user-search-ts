import SEARCH_REPO from '../constants/searchRepo'
import {Action} from '../../types/reduxTypes'


const searchRepoInitialState = {
    data: null,
    isLoading:false,
    err: null,
}

const searchRepoReducer = (state=searchRepoInitialState,action:Action) =>{

    switch (action.type) {
        case SEARCH_REPO.LOADING:
            return{
                ...state,
                isLoading: true
            }
        case SEARCH_REPO.SUCCESS:
            return{
                ...state,
                data: action.payLoad,
                isLoading: false,
                err: null
            }
        case SEARCH_REPO.FAILURE:
            return{
                ...state ,
                isLoading: false ,
                err: action.err
            }
        case SEARCH_REPO.CLEAR:
            return{
                data: action.payLoad,
                isLoading:false,
                err: null,
            }
        default: return state
    }
}

export {
    searchRepoReducer
}