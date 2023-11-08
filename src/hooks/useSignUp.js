//Importing the useMutation hook and the defined SIGN_UP mutation.
import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../services/mutations'

//Defining a hook to use the SIGN_UP mutation.
const useSignUp = () => {

    /*Defining a variable for the useMutation hook and the result of the 
    operation. Errors are printed to console. */
    const [register, result] = useMutation(SIGN_UP, {
        onError: (error) => {
            console.log(error)
        }
    })

    /*Defining a function to sign up with a valid username and password.
    On succesful mutation the newly registered users data is returned. */
    const signUp = async ({ user, pwd }) => {

        const registered = await register({ variables: { user: user, pwd: pwd } })
        if (registered) {

            return registered
        }

    }

    //Returning the signUp function and the result of the mutation.
    return [signUp, result]
}

export default useSignUp;
