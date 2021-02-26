import SEARCH_REPO from '../constants/searchRepo'
import {Octokit} from '@octokit/core'

import { currentData } from './currentData'

const searchRepo =  (text:string) => async (dispatch: (arg0: { type: string; payLoad?: any; err?: any; }) => void) =>{
    const octokit = new Octokit({ auth: `78bd61f0e9ee3ae1ffa918faf059ca5b555a0c66` });
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