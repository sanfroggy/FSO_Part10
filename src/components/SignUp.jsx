/*Importing the Text, Pressable, View and StyleSheet components, as well
as the imported FormikTextInput component. Also importing Formik component from
formik library and themes as well as the useSignUp, useSignIn and useNavigate hooks. */
import { Pressable, View, StyleSheet } from 'react-native';
import Text from './Text'
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik';
import themes from '../theme'
import * as yup from 'yup'
import { useNavigate } from 'react-router-native'
import useSignUp from '../hooks/useSignUp'
import useSignIn from '../hooks/useSignIn'

/*Creating a validationSchema using the yup library to validate
user input, when creating a new user. */
const validationSchema = yup.object().shape({
    user: yup.string().required('Username cannot have an empty value.')
        .min(5, 'Username length must be between 5 and 30 characters.')
        .max(30, 'Username length must be between 5 and 30 characters.'),
    pwd: yup.string().required('Password cannot have an empty value.')
        .min(5, 'Password length must be between 5 and 50 characters.')
        .max(30, 'Password length must be between 5 and 50 characters.'),
    repwd: yup.string().oneOf([yup.ref('pwd')], 'Password re-entry is invalid.')
        .required('Password re-entry cannot have an empty value.')
});

//Defining initial values for the SignUp component.
const initialValues = {
    user: '',
    pwd: '',
    repwd: 0
}

//Defining a style for the Pressable submit container.
const styles = StyleSheet.create({
    btnStyle: {
        marginLeft: 25,
        marginTop: 10
    }
});

/*Defining a component that uses the FormikTextInput components
to keep track of written user and password input. Also contains the 
Pressable Text component used to submit the data. */
const SignUpForm = ({ onSubmit }) => {
    return (
        <View>
            <FormikTextInput
                name='user'
                placeholder='Enter username.'
            />
            <FormikTextInput
                name='pwd'
                placeholder='Enter password.'
                secureTextEntry={true}
            />
            <FormikTextInput
                name='repwd'
                placeholder='Re-enter password.'
                secureTextEntry={true}
            />
            <View style={styles.btnStyle}>
                <Pressable style={themes.aesthetics.largeContainerWithSilverBrgd} onPress={onSubmit}>
                    <Text style='label' color='textSecondary'>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    )
}

const SignUp = () => {

    //Defining a variable to use the useNavigate hook.
    const navigate = useNavigate()

    /*Defining a variable to use the defined useSignUp hook
    and one for the defined useSignIn hook. */
    const [signUp] = useSignUp()
    const [signIn] = useSignIn()

    /*If the mutation defined in the useSignUp hook is successfully executed,
    the user is created. Then the newly created user is signed in using the useSignIn hook
    and redirected to the "home page". If not, the occurred error is then printed to console.*/
    const onSubmit = async (values) => {

        try {
            const response = await signUp({
                user: values.user, pwd: values.pwd})
            if (!response.loading) {
                console.log(response)
                await signIn({ user: values.user, pwd: values.pwd })
                navigate(`/`)
            }

        } catch (error) {
            console.log(error)
        }

    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
    )

}

export default SignUp
