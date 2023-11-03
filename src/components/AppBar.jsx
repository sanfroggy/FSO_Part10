//Importing the View and AppBarTab components as well as themes.
import { View, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab'
import themes from '../theme'

//Defining an AppBar component.
const AppBar = () => {

    /*Returning a View component with a ScrollField component and 2 AppBarTab components 
    as it's child. ScrollView component allows for horizontal scrolling when the
    AppBar components don't fit the screen and AppBarTabs acts as links to different views 
    in the app. The style of the View makes sure all the links stay in a row formation. */
    return (
        <View style={themes.aesthetics.topBar}>
            <ScrollView horizontal>
                <AppBarTab label={'Repositories'} destination={'/'} />
                <AppBarTab label={'Sign In'} destination={'/signin'} />
            </ScrollView>
        </View>
    );
};

export default AppBar;