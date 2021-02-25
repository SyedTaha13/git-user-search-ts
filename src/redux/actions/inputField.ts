import INPUT_FIELD from '../constants/inputField'

const changeInputText = (val:string) =>{
    return{
        type: INPUT_FIELD.SET_TEXT,
        payLoad: val ,
    }
}

export default changeInputText;
