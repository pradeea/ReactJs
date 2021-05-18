import { combineReducers } from 'redux';

const dataReducer=()=>{
    return [
        {name:'pradeep'},
        {email:'pradeeakumar@gmail.com'},
        {passcode:'pradeep'}
    ];
};
const LoginReducer =(islogedin=false, action)=>{
    if(action.type==='NAME')
    {
        return action.payload
    }

    return islogedin;
}

export default combineReducers({
    nameList:dataReducer,
    login:LoginReducer
});
