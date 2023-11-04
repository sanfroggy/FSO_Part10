/*Importing the NativeRouter, StatusBar and Main components, as well as
ApolloProvider, createApolloClient function and the defined AuthStorage util. */
import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar'
import { ApolloProvider } from '@apollo/client';
import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/authStorageContext';

//Defining a variable for a new AuthStorage.
const authStorage = new AuthStorage();

//Defining an Apollo client.
const apolloClient = createApolloClient(authStorage);

const App = () => {

    /*Returning Main as a child of NativeRouter to allow
    other components to use Routes, ApolloProvider to provide
    access to the client, as well as AuthStorageContext.Provider
    to provide access to the defined AuthStorage. Also returning a StatusBar. */
    return (
        <>
            <NativeRouter>
                <ApolloProvider client={apolloClient}>
                    <AuthStorageContext.Provider value={authStorage}>
                        <Main />
                    </AuthStorageContext.Provider>
                 </ApolloProvider>
            </NativeRouter>
            <StatusBar style="auto" />
        </>
    )
}

export default App;
