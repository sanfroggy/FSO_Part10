//Importing ApolloClient and InMemoryCache, as well as the createHttpLink function.
/*Importing ApolloClient, InMemoryCache and the createHttpLink function.
Also importing Constants to get the url from .env and the setContext function. */
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';

//Using createHttpLink to connect to the backend.
const httpLink = createHttpLink({
    uri: Constants.manifest.extra.env

});

//Defining an ApolloClient used �n App.
const createApolloClient = (authStorage) => {

    /*Defining an authLink variable to make it possible to add
    stored tokens to request authorization headers. */
    const authLink = setContext(async (_, { headers }) => {
        try {
            const accessToken = await authStorage.getAccessToken();
            return {
                headers: {
                    ...headers,
                    authorization: accessToken ? `Bearer ${accessToken}` : '',
                },
            };
        } catch (e) {
            console.log(e);
            return {
                headers,
            };
        }
    });

    //Returning a new Apollo Client with the defined authLink and inMemoryCache.
    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;
