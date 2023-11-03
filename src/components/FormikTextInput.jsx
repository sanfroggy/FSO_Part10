/*Importing the useField hook and StyleSheet, TextInput,
 ScrollView and Text components.*/
import { useField } from 'formik';
import { StyleSheet, Text, ScrollView } from 'react-native'
import TextInput from './TextInput';

/*Creating a custom style for a possible error message and a style 
for the input fields. */
const styles = StyleSheet.create({
    errorText: {
        marginTop: 5,
        color: 'red'
    },
    inputStyle: {
        height: 35,
        width: 250,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        marginLeft: 25,
        marginTop: 10,
        marginBottom: 10
    }
});

/*Defining a FormikTextInput component using the Fornik library.
This provides a reusable model for TextField components using Fornik. 
It receives a name of the variable as a parameter and all the other 
possible props. */
const FormikTextInput = ({ name, ...props }) => {

    /*Defining a field variable to store the value, meta variable to catch 
    validation errors e.g. and helpers variable to provide functions for 
    setting the value of the variable. Also defining a showError variable 
    for a possible error message. */
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    /*Returning a defined TextInput component wrapped as a child of 
    a ScrollView component. */
    return (
        <>
            <ScrollView horizontal>
            <TextInput
                style={styles.inputStyle}
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                {...props}
            />
            </ScrollView>
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </>
    );
};

export default FormikTextInput;