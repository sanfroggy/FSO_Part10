//Importing the RepositoryList component and the View component.
import RepositoryList from './RepositoryList';
import { View } from 'react-native';
import AppBar from './AppBar'

const Main = () => {

    return (
        <View>
            <AppBar/ >
            <RepositoryList />
        </View>
    );
};

export default Main;
