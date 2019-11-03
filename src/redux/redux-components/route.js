import LandingPage from '../../components/landingPage'
import Form from '../../components/login/loginform'

import {connect} from 'react-redux'
import {login,logout} from '../actions'

const mapStatetoProps=(state)=>{
    return state
}

const mapDispatchtoprops=(dispatch)=>{
    return{
        login:()=>dispatch(login()),
        logout:()=>dispatch(logout())
    }
}
export default connect(mapStatetoProps,mapDispatchtoprops)(LandingPage)