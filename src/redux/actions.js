export function login(){
    console.log('logging in')
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