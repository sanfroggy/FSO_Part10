//Importing themes and the Stylesheet, Text and Pressable components.
import { StyleSheet, Text } from 'react-native';
import themes from '../theme'
import { Link } from 'react-router-native'

/*Defining an AppBarTab component, to easily create pressable
labels for the app bar. */
const AppBarTab = ({ label, destination }) => {

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
            <Link to={destination}>
                <Text style={styles.textStyle}>{label}   </Text>
            </Link>
        </>
    )
}

export default AppBarTab