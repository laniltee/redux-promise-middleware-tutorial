import React from 'react';
import {Provider} from 'react-redux';
import store from './store/configureStore';
import UsersComponent from "./components/UsersComponent";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <UsersComponent/>
            </div>
        </Provider>
    );
}

export default App;
