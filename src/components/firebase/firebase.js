import app from 'firebase/app'
import 'firebase/database'

const config={
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: process.env.REACT_APP_PROJ_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
}

class Firebase{
    constructor(){
        app.initializeApp(config)
        this.db=app.database();
    }

    users=()=>{
      this.db.ref('users')
    }
}

export default Firebase