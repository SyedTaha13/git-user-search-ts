import React from 'react'
import styled from 'styled-components'
import {connect, RootStateOrAny} from 'react-redux'


import { ResultProps } from '../types/componentTypes';

const Results: React.FC<ResultProps> = (props:any) =>{
    const {currentDataReducer} = props
    return(
        <CardWrapper>
            {
                currentDataReducer.data?.map((val:any,idx:number)=>{
                    if(val.login){
                        return(
                            <Card>
                                <Profile>
                                    <img style={{width: 50, height: 50, borderRadius: 50}} src={val.avatar_url} />
                                    <p style={{fontSize: 18, marginLeft: 20}}>{val.login}</p>
                                </Profile>
                                <div>
                                    <p><LinkText target="_blank" href={val.html_url}>Profile</LinkText></p>
                                    
                                </div>
                            </Card>
                        )
                    }else{
                        return(
                            <Card>
                                <p>Name: {val.name}</p>
                                <p><a target="_blank" href={val.html_url}>Repository</a></p>
                            </Card>
                        )
                    }
                })
            }
        </CardWrapper>
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

const CardWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
margin-top: 20px;

`

const Profile = styled.div`
display: flex;
`

const LinkText = styled.a`
    font-size: 18px;
    font-family: "Inter-SemiBold"; 
    position: relative; 
    text-decoration: none;
    color: black;
    :hover{
        // color:red;
        text-decoration: underline;
    }
`
const Card = styled.div`
display: flex;
flex-direction: column;
width: 30%;
height: 100px;
background: lightgray;
margin-bottom: 20px;
padding: 20px;

@media only screen and (max-width: 467px) {
    width:  100%  
   }
@media only screen and (min-width: 468px) and (max-width: 767px) {
    width:  40%  
   }
@media only screen and (min-width: 768px) and (max-width: 849px){
    width:  40%  
}
@media only screen and (min-width: 850px){
    width:  28%  
}

`