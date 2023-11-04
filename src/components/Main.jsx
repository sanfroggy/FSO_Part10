/*Importing the RepositoryList, AppBar, SignIn, Routes,
Route and the View components. */
import RepositoryList from './RepositoryList';
import { View } from 'react-native';
import AppBar from './AppBar'
import SignIn from './SignIn'
import { Routes, Route } from 'react-router-native'

const Main = () => {

    /*Returning the defined AppBar and a RepositoryList component or SignIn component
    depending on the current Route. */
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />} />
                <Route path='/signin' element={<SignIn />} />
            </Routes>


        </View>
    );
};

export default Main;
