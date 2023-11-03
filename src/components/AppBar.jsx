//Importing the View and AppBarTab components as well as themes.
import { View } from 'react-native';
import AppBarTab from './AppBarTab'
import themes from '../theme'

//Defining an AppBar component.
const AppBar = () => {

    /*Returning a View component with 2 AppBarTab components as it's child.
    They acts as links to different views in the app. */
    return (
        <View style={themes.aesthetics.topBar}>
            <AppBarTab label={'Repositories'} destination={'/'} />
            <AppBarTab label={'Sign In'} destination={'/signin'} />
        </View>
    );
};

export default AppBar;