//Importing themes and the Text and Link components, as well as theme.
import Text from './Text'
import themes from '../theme'
import { Link } from 'react-router-native'

/*Defining an AppBarTab component, to easily create pressable
labels for the app bar. */
const AppBarTab = ({ label, destination }) => {

    //Returning a pressable text component.
    return (
        <>
            <Link to={destination}>
                <Text style={themes.fontStyles.label} color='textSecondary'>{label}   </Text>
            </Link>
        </>
    )
}

export default AppBarTab