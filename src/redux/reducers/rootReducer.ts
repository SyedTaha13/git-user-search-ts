import { combineReducers } from 'redux'

import {inputFieldReducer} from './inputField'
import {searchRepoReducer} from './searchRepo'
import {searchUserReducer} from './searchUser'
import {currentDataReducer} from './currentData'

const rootReducer = combineReducers(
    {
        inputFieldReducer ,
        searchRepoReducer ,
        searchUserReducer ,
        currentDataReducer ,
    }
)

export {rootReducer}