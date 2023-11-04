/*Importing the Text, Pressable, View and StyleSheet components, as well
as the imported FormikTextInput component. Also importing Formik component from
formik library and themes as well as the useSignIn and useNavigate hooks. */
import { Pressable, View, StyleSheet } from 'react-native';
import Text from './Text'
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik';
import themes from '../theme'
import * as yup from 'yup'
import useSignIn from '../hooks/useSignIn'
import { useNavigate } from 'react-router-native'

/*Creating a validationSchema using the yup library to validate
user input, when signing in. */
const validationSchema = yup.object().shape({
    user: yup.string().
        required('Username is required to sign in.'),
    pwd: yup.string().
        required('Password is required to sign in.'),
});

//Defining initial values for the SignIn component.
const initialValues = {
    user: '',
    pwd: ''
}

//Defining a style for the Pressable submit container.
const styles = StyleSheet.create({
    btnStyle: {
        marginLeft: 25,
        marginTop: 10
    }
});

/*Defining a component that uses the FormikTextInput components
to keep track of writter user and password input. Also contains the 
Pressable Text component used to submit the data. */
const SignInForm = ({ onSubmit }) => {
    return (
        <View>
            <FormikTextInput
                name='user'
                placeholder='Username'
            />
            <FormikTextInput
                name='pwd'
                placeholder='Password'
                secureTextEntry={true}
            />
            <View style={styles.btnStyle}>
                <Pressable style={themes.aesthetics.largeContainerWithSilverBrgd} onPress={onSubmit}>
                    <Text style='label' color='textSecondary'>Sign In</Text>
                </Pressable>
            </View>
        </View>
    )
}

/*Defining a component to tie the defined components logically together.
In addition to providing an onSubmit function, it provides initial values
for the Formik component and the SignInForm defined as it's child also gets
the onSubmit function from the same Formik component. */
const SignIn = () => {

    //Defining a variable to use the useNavigate hook.
    const navigate = useNavigate()

    //Defining a variable to use the defined useSignIn hook.
    const [signIn] = useSignIn()

    /*If the mutation defined in the useSignIn hook is successfully executed,
    the authorization token is saved to the AsyncStorage and the user is redirected back to
    the "home page". If not, the occurred error is then printed to console.*/
    const onSubmit = async (values) => {

        try {
            await signIn({ user: values.user, pwd: values.pwd })
            navigate('/')
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    )

}

export default SignIn;