import React,{ Component } from 'react';
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import LoginForm from './component/LoginForm'
import firebase from 'firebase'

class App extends Component {
    componentDidMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyDSHyurOgbMP5QDhJuuyHn9iMe3PhEuEyQ",
            authDomain: "manager-666.firebaseapp.com",
            databaseURL: "https://manager-666.firebaseio.com",
            projectId: "manager-666",
            storageBucket: "",
            messagingSenderId: "390631124365",
            appId: "1:390631124365:web:b6841a7fe5d3e95e"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig)
    }

    render() {
        const store= createStore(reducers)
    

        return (
            <Provider store={store}>
                <LoginForm/>
            </Provider>
        );
    }
}

export default App;