import React from 'react'
// import styled from 'styled-components'
import {connect, RootStateOrAny} from 'react-redux'

import {HeaderProps} from '../types/componentTypes'


const Header: React.FC<HeaderProps> = (props) =>{

    return(
        <div>
            <h4>Github Sercher</h4>
            <p>{props.text}</p>
        </div>
    )
}


export default Header ;