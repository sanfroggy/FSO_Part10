/*Importing the Text, Pressable, View and StyleSheet components, as well
as the imported FormikTextInput component. Also importing Formik component from
formik library and themes. */
import { Text, Pressable, View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik';
import themes from '../theme'

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
                    <Text style={themes.aesthetics.againstColorfulBgrdText}>Sign In</Text>
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
    const onSubmit = ( values ) => {

        console.log(values.user);
        console.log(values.pwd);
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    )

}

export default SignIn;