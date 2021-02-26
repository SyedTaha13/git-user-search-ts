import SEARCH_REPO from '../constants/searchRepo'
import {Octokit} from '@octokit/core'

import { currentData } from './currentData'

const searchRepo =  (text:string) => async (dispatch: (arg0: { type: string; payLoad?: any; err?: any; }) => void) =>{

    const octokit = new Octokit({ auth: `${process.env.REACT_APP_GIT_KEY}` });
    dispatch(searchRepoLoading())
    try {
        let apiCall = await octokit.request('GET /search/repositories', 
                        {
                            q:`${text}`,
                            per_page:12,
                            page:1
                        })
        dispatch(searchRepoSuccess(apiCall.data.items))
        dispatch(currentData(apiCall.data.items))

    } catch (err) {
        dispatch(searchRepoFailure(err))
    }
}

const searchRepoLoading = () =>{
    return{
        type: SEARCH_REPO.LOADING
    }
}

export const searchRepoSuccess = (data:any) =>{
    return{
        type: SEARCH_REPO.SUCCESS ,
        payLoad: data
    }
}

const searchRepoFailure = (err:any) =>{
    return{
        type: SEARCH_REPO.FAILURE ,
        err: err
    }
}

export const clearRepoData = () =>{
    return{
        type: SEARCH_REPO.CLEAR,
        payLoad: null

    }
}


export default searchRepo;