//Importing the TextInput component.
import { TextInput as NativeTextInput } from 'react-native';

//Defining a TextInput component that can be easily styled.
const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [style];

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;