import React from 'react'
// import styled from 'styled-components'
import {connect, RootStateOrAny} from 'react-redux'


import { ResultProps } from '../types/componentTypes';

const Results: React.FC<ResultProps> = (props:any) =>{
    console.log('Results Props > ' , props)
    const {currentDataReducer} = props
    return(
        <div>
            {
                currentDataReducer.data?.map((val:any,idx:number)=>{
                    console.log('Each Value > ' , val)
                    if(val.login){
                        return(
                            <p>{val.login}</p>
                        )
                    }else{
                        return(
                            <p>{val.created_at}</p>
                        )
                    }
                })
            }
        </div>
    )
}


const mapStateToProps = (state:RootStateOrAny) =>{
    return{
        searchRepoReducer : state.searchRepoReducer ,
        searchUserReducer : state.searchUserReducer,
        currentDataReducer : state.currentDataReducer ,
    }
}

export default connect(mapStateToProps,null)(Results) ; 