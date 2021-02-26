import React from 'react'
import styled from 'styled-components'
import {connect, RootStateOrAny} from 'react-redux'
import debounce from 'lodash/debounce'

import changeInputText from '../redux/actions/inputField'
import searchRepo from '../redux/actions/searchRepo'
import searchUser from '../redux/actions/searchUser'
import {clearUserData} from '../redux/actions/searchUser'
import {clearRepoData} from '../redux/actions/searchRepo'
import {clearCurrentData} from '../redux/actions/currentData'


const StyledInput = styled.input({
    fontFamily: "Inter-Regular",
    fontSize: "14px",
    height:'50px',
    width:'24%',
    border: '0.5px slid gray',
})

const StyledSelect = styled.select({
    fontFamily: "Inter-Regular",
    fontSize: "14px",
    width:"100px",
    height:"55px",
    marginLeft:'15px',
    border: '0.5px slid gray'
})

const InputsContainer = styled.div({
    display:'flex',
    flexDirection:'row'

})


const Results: React.FC = (props:any) =>{
    const [inputState,setInputState] = React.useState(props.inputFieldReducer.text)
    const [selectState,setSelectState] = React.useState<string>('users')
    const prevTextState = React.useRef<string>(inputState)
    React.useEffect(()=>{setInputState(props.inputFieldReducer.text)},[props.inputFieldReducer.text])

    const debounceLoadData = React.useCallback(debounce((text:string,select:string)=>{
        select == 'repos' ? props.searchRepo(text) : props.searchUser(text)}, 600), []);
    
    React.useEffect(()=>{
        if(inputState.length>2){
            debounceLoadData(inputState,selectState)
        }
        else if (inputState.length<3){
            props.clearUserData()
            props.clearRepoData()
            props.clearCurrentData()
        }
    },[inputState,selectState])

    const handleInputChange = (e:any) =>{
        props.changeInputText(e.target.value)
        if(inputState.length>2){
            prevTextState.current = e.target.value
        } 
    }

    return(
        <InputsContainer>
         <StyledInput placeholder='Start typing to search...' 
                onChange={handleInputChange}
                value={inputState}
            />
            <StyledSelect onChange={(e)=>setSelectState(e.target.value)} value={selectState}>
                <option value='users' >Users</option>
                <option value='repos'>Repos</option>
            </StyledSelect>
        </InputsContainer>

    )
}

const mapStateToProps =(state:RootStateOrAny) =>{
    return{
        inputFieldReducer: state.inputFieldReducer,
    }
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        changeInputText: (val:string)=> dispatch(changeInputText(val)) ,
        searchRepo: (text:string) => dispatch(searchRepo(text)),
        searchUser: (text:string) => dispatch(searchUser(text)),
        clearUserData: () => dispatch(clearUserData()),
        clearRepoData: () => dispatch(clearRepoData()),
        clearCurrentData: () => dispatch(clearCurrentData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Results) ; 
