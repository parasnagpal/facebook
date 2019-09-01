export function login(){
    return{
        type:'LOGIN',
        payload:{
            username:"Paras"
        }
    }
}
export function logout(){
    return {
        type:'LOGOUT'
    }
}