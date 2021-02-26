import React from 'react'
import Inputs from '../components/Inputs'
import Header from '../components/Header'
import Results from '../components/Results'

const MainPage: React.FC = () =>{

    return(
        <div style={{padding: 20}}>
            {/* <p>Test</p> */}
            <Header text='Search users or repositories below'/>
            <Inputs />
            <Results />
        </div>
    )
}

export default MainPage ;