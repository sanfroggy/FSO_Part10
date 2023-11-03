//Importing the NativeRouter, StatusBar and Main components.
import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar'
import Main from './src/components/Main';

const App = () => {

    /*Returning Main as a child of NativeRouter to allow
    other components to use Routes. Also returning a StatusBar. */
    return (
        <>
            <NativeRouter>
                <Main />
            </NativeRouter>
            <StatusBar style="auto" />
        </>
    )
}

export default App;
