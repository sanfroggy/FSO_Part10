//Importing the RepositoryList component and the View component.
import RepositoryList from './RepositoryList';
import { View } from 'react-native';
import AppBar from './AppBar'
import SignIn from './SignIn'
import { Routes, Route } from 'react-router-native'

const Main = () => {

    /*Returning the defined AppBar and a RepositoryList component or SignIn component
    depending on the current Route. */
    return (
        <View >
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />} />
                <Route path='/signin' element={<SignIn />} />
            </Routes>


        </View>
    );
};

export default Main;
