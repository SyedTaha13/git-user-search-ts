import SEARCH_USER from '../constants/searchUser'
import {Octokit} from '@octokit/core'

import { currentData } from './currentData'


const searchUser =  (text:string) => async (dispatch: (arg0: { type: string; payLoad?: any; err?: any; }) => void) =>{
    const octokit = new Octokit({ auth: `627e975b34b6c26b0436800961058df2a7c7b4f0` });
    dispatch(searchUserLoading())
    try {
        let apiCall = await octokit.request('GET /search/users',{
                                        q: `${text}`,
                                        per_page:10,
                                        page:1
                                    })
        dispatch(searchUserSuccess(apiCall.data.items))
        dispatch(currentData(apiCall.data.items))

    } catch (err) {
        err.response && dispatch(searchUserFailure(err))
    }
}

const searchUserLoading = () =>{
    return{
        type: SEARCH_USER.LOADING
    }
}

const searchUserSuccess = (data:any) =>{
    return{
        type: SEARCH_USER.SUCCESS ,
        payLoad: data
    }
}

const searchUserFailure = (err:any) =>{
    return{
        type: SEARCH_USER.FAILURE ,
        err: err
    }
}

export const clearUserData = () =>{
    return{
        type: SEARCH_USER.CLEAR,
        payLoad: null
    }
}


export default searchUser;