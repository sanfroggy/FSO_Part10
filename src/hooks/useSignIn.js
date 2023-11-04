//Importing the useQuery hook and the defined SIGN_IN mutation.
import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../services/mutations'

//Defining a function the result of the mutation and a function to sign in.
const useSignIn = () => {

    /*Defining a variable for the useMutation hook and the result of the 
    operation. Errors are printed to console. */
    const [auth, result] = useMutation(SIGN_IN, {
        onError: (error) => {
            console.log(error)
        }
    })

    /*Defining a function to sign in with the correct credentials.
    On succesful mutation the accessToken is returned. */
    const signIn = async ({ user, pwd }) => {
         return await auth({ variables: { user: user, pwd: pwd } })
    }

    //Returning the signIn function and the result of the mutation.
    return [signIn, result]
}

export default useSignIn;
