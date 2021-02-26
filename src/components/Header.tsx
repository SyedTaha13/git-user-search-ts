import React from 'react'
import Logo from '../assets/githubLogo.png'
// import styled from 'styled-components'
import {connect, RootStateOrAny} from 'react-redux'

import {HeaderProps} from '../types/componentTypes'


const Header: React.FC<HeaderProps> = (props) =>{

    return(
        <div>
            <div style={{display: 'flex', alignItems:'center'}}>
            <img src={Logo} style={{width: 70, height: 70}}/>
            <div>
            <h3 style={{marginBottom: 0}}>Github Searcher</h3>
            <h5 style={{marginTop: 3, color: 'gray'}}>{props.text}</h5>
            </div>
            </div>
            
        </div>
    )
}


export default Header ;