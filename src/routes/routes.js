import LandingPage from '../components/landingPage'
import LoginPage from '../components/login/loginpage'

import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import reducer from './redux/reducer'

const store=createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
 )

 