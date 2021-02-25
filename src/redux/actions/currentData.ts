import CURRENT_DATA from '../constants/currentData'

export const currentData = (val:any[]) =>{
    return{
        type: CURRENT_DATA.SET,
        payLoad: val ,
    }
}

export const clearCurrentData = () =>{
    return{
        type: CURRENT_DATA.CLEAR,
        payLoad: null

    }
}

