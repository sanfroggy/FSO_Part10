/*Importing necessary Components and themes. */
import FormikTextInput from '../../components/FormikTextInput';
import * as yup from 'yup'
import { Formik } from 'formik';
import themes from '../../theme'
import { Text, Pressable, View, StyleSheet } from 'react-native';
import { render, fireEvent, screen, waitFor } from '@testing-library/react-native';

/*Defining the SignInForm component to be filled with user data. The "pure" code of the
actual SignInForm component defined in the SignIn.jsx is used to imitate the actual
component. */
const SignInForm = ({ onSubmit }) => {

    //Defining a style for the Pressable submit container.
    const styles = StyleSheet.create({
        btnStyle: {
            marginLeft: 25,
            marginTop: 10
        }
    });

    //Defining a View with imported FormikTexTInput components and a Pressable text.
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
                    <Text style='label' color='textSecondary'>Submit</Text>
                </Pressable>
            </View>
        </View>
    )
};

/*Defining the SignInFormContainer component that uses Formik and a validationSchema
to handle sign in events. The "pure" code of the actual SignIn component defined in the SignIn.jsx 
is used to imitate the actual component, except for the onSubmit event, which would use the
defined useSignIn hook. */
const SignInFormContainer = ({ submit }) => {

    /*Creating a validationSchema using the yup library to validate
    user input, when signing in. */
    const validationSchema = yup.object().shape({
        user: yup.string().
            required('Username is required to sign in.'),
        pwd: yup.string().
            required('Password is required to sign in.'),
    });

    /*Defining a function that receives the FormikTextInput
    component values and uses the wrapped received submit function
    to test the function call. */
    const onSubmit = async (values) => {

        const username = values.user
        const password = values.pwd


        try {
            submit({ username, password })
        } catch (error) {
            console.log(error)
        }
        
    };

    return (
        <Formik initialValues={{ user: '', pwd: '' }} onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    )
}

/*Testing that the SignIn function is called when the form is submitted
using the "Submit" button and that it receives the correct arguments. */
describe('SignIn', () => {
    it('calls function provided by onSubmit prop after pressing the submit button', async () => {

        //Defining a mock function and rendering the SignInContainer component.
        const onSubmit = jest.fn();
        render(<SignInFormContainer submit={onSubmit} />);

        //Typing values into Username and Password fields and pressing the "Submit" button.
        fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle');
        fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
        fireEvent.press(screen.getByText('Submit'));

        /*Testing that the onSubmit.mock.calls[0][0] contains the first 
        argument of the first call and that the argument contains the correct
        data. */
        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes(1);
            expect(onSubmit.mock.calls[0][0]).toEqual({
                username: 'kalle',
                password: 'password',
            });
        })
    });
});
