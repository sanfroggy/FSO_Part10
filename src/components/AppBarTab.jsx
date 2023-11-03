//Importing themes and the Stylesheet, Text and Pressable components.
import { StyleSheet, Text, Pressable } from 'react-native';
import themes from '../theme'

/*Defining an AppBarTab component, to easily create pressable
labels for the app bar. */
const AppBarTab = ({ label }) => {

    //Defining a style for the app bar text.
    const styles = StyleSheet.create({
        textStyle: {
            fontWeight: 'bold',
            color: themes.aesthetics.againstColorfulBgrdText.color,
            fontSize: themes.fontStyles.label.fontSize
            
        }
    });

    //Returning a pressable text component.
    return (
        <>
            <Pressable>
                <Text style={styles.textStyle}>{label}</Text>
            </Pressable>
        </>
    )
}

export default AppBarTab