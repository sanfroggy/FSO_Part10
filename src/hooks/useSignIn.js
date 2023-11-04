/*Importing the useQuery hook and the defined SIGN_IN mutation.
Also importing the useContext and useApolloClient hooks, as well as
the defined AuthStorageContext. */
import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../services/mutations'
import { useApolloClient } from '@apollo/client';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/authStorageContext';

//Defining a function the result of the mutation and a function to sign in.
const useSignIn = () => {

    /*Defining a variable to use the AuthStorageContext used to store
    the received token. */
    const authStorage = useContext(AuthStorageContext)

    //Defining a variable to use the Apollo Client.
    const client = useApolloClient()

    /*Defining a variable for the useMutation hook and the result of the 
    operation. Errors are printed to console. */
    const [auth, result] = useMutation(SIGN_IN, {
        onError: (error) => {
            console.log(error)
        }
    })

    /*Defining a function to sign in with the correct credentials.
    On succesful mutation the accessToken is stored to the AsyncStorage and returned. */
    const signIn = async ({ user, pwd }) => {
        const authData = await auth({ variables: { user: user, pwd: pwd } })
        if (authData) {
            await authStorage.setAccessToken(authData.data.authenticate.accessToken)
            client.resetStore();
            return authData
        }
    }

    //Returning the signIn function and the result of the mutation.
    return [signIn, result]
}

export default useSignIn;
