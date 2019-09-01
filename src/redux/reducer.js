const initialState={
    loggedin:false,
    username:null
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {
                loggedin:true,
                username:action.payload.username
            }
        case 'LOGOUT':
             return{
                 loggedin:false
             }  
        default: return state       
    }
}
export default reducer