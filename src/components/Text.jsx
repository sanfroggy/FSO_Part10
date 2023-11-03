/*Importing Text and Stylessheet components from react-native. 
Also importing theme. */
import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../theme';

/*Creating a stylesheet the set the color and font of the text
component. */
const styles = StyleSheet.create({
    text: {
        fontFamily: theme.fonts.main,
    },
    colorError: {
        color: theme.aesthetics.colors.textError,
    },
    colorSecondary: {
        color: theme.aesthetics.colors.textSecondary,
    },
    colorPrimary: {
        color: theme.aesthetics.colors.textPrimary,
    }
});

/*Defining a reusable Text component that can receive style
definitions and color definitions separately and is by default
set to an appropriate font according to the used platform. */
const Text = ({ color, style, ...props }) => {
    const textStyle = [
        styles.text,
        color === 'textError' && styles.colorError,
        color === 'textSecondary' && styles.colorSecondary,
        color === 'primary' && styles.colorPrimary,
        style,
    ];

    return <NativeText style={textStyle} {...props} />;
};

export default Text;