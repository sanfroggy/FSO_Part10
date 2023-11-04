/*Importing the NativeRouter, StatusBar and Main components, as well as
ApolloProvider and  createApolloClient function. */
import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar'
import { ApolloProvider } from '@apollo/client';
import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';

//Defining an Apollo client.
const apolloClient = createApolloClient();

const App = () => {

    /*Returning Main as a child of NativeRouter to allow
    other components to use Routes. Also returning a StatusBar. */
    return (
        <>
            <NativeRouter>
                <ApolloProvider client={apolloClient}>
                    <Main />
                 </ApolloProvider>
            </NativeRouter>
            <StatusBar style="auto" />
        </>
    )
}

export default App;
