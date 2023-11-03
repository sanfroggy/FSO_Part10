//Importing the TextInput component.
import { TextInput as NativeTextInput } from 'react-native';

/*Defining a TextInput component that can be easily styled. If an error
is received from the FormikTextInput component, the received inputErrorStyle
is used, if not the regular style is used. */
const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = style;

    return error ? <NativeTextInput style={textInputStyle.inputErrorStyle} {...props} /> :
        <NativeTextInput style={textInputStyle.inputStyle} {...props} />;
};

export default TextInput;