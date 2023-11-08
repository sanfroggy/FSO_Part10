/*Importing the RepositoryList, AppBar, SignIn, Routes,
Route, AuthStorageContext and the View components. Also importing the
useEffect, useNavigate, useApolloClient and useContext hooks. */
import RepositoryList from './RepositoryList';
import { View } from 'react-native';
import AppBar from './AppBar'
import SignIn from './SignIn'
import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-native'
import AuthStorageContext from '../contexts/authStorageContext';
import { useApolloClient } from '@apollo/client';
import { useContext } from 'react';
import SingleRepo from './SingleRepo';
import Review from './Review'
import SignUp from './SignUp'

const Main = () => {

    /*Defining a SignOut component to be used for signing out
    when navigating to "/signout" route. */
    const SignOut = () => {

        //Defining variables for the useNavigate and useContext hooks.
        const navigate = useNavigate()
        const authStorage = useContext(AuthStorageContext)

        //Defining a variable to use the Apollo Client.
        const client = useApolloClient()

        /*Using the useEffect hook to remove the AccessToken from authStorage,
        , reset the store of the Apollo Client and navigate back to "home page"
        whenever the SignOut component is rendered. */
        useEffect(() => {
            try {
                authStorage.removeAccessToken()
                client.resetStore()
                navigate('/')
            } catch (error) {
                console.log(error)
            }

        }, [])

    }

    /*Returning the defined AppBar and a RepositoryList component or a
    SingleRepo component depending on the current Route and a SignOut
    component or a SignIn component depending on the current Route. */
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signout' element={<SignOut />} />
                <Route path='/repositories/:id' element={<SingleRepo />} />
                <Route path='/createreview' element={<Review />} />
                <Route path='/signup' element={<SignUp /> } />
            </Routes>


        </View>
    );
};

export default Main;
