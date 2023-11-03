//Importing the View and AppBarTab components as well as themes.
import { View } from 'react-native';
import AppBarTab from './AppBarTab'
import themes from '../theme'

//Defining an AppBar component.
const AppBar = () => {

    //Returning a View component with an AppBarTab component, as it's child.
    return (
        <View style={themes.aesthetics.topBar}>
            <AppBarTab label={'Repositories'} />
        </View>
    );
};

export default AppBar;