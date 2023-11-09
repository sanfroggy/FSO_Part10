/*Importing the View, ScrollView and AppBarTab components as well as theme.
Also using useQuery, useState and useEffect hooks as well as the ME query. */
import { View, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab'
import themes from '../theme'
import { useQuery } from '@apollo/client';
import { ME } from '../services/queries';
import { useEffect, useState } from 'react'

//Defining an AppBar component.
const AppBar = () => {

    //Defining a variable to use the useQuery hook with the defined ME query.
    const userQuery = useQuery(ME)

    //Defining a "state variable" for the data of the logged in user.
    const [user, setUser] = useState(null)

    /*Using the useEffect hook to give the user a value
    on first render, according the the data received using the
    defined ME query. */
    useEffect(() => {
        if (!userQuery.loading) {
            setUser(userQuery.data.me) 
        }
    }, [])

    /*Using the useEffect hook to give the user a value
    whenever the result of the defined ME query changes. */
    useEffect(() => {
        if (!userQuery.loading) {
            setUser(userQuery.data.me)
        }
    }, [userQuery])

    /*Returning a View component with a ScrollField component and 2 AppBarTab components 
    as it's child. If the value of the user is null then the Link component to sign in and to sign up
    are displayed. If a user is logged in the Link components to create a review, to view already posted 
    reviews and to sign out are displayed. ScrollView component allows for horizontal scrolling when the 
    AppBar components don't fit the screen and AppBarTabs acts as links to different views in the app. 
    The style of the View makes sure all the links stay in a row formation. */
    return (
        <View style={themes.aesthetics.topBar}>
            <ScrollView horizontal>
                <AppBarTab label={'Repositories'} destination={'/'} />
                {user ? <AppBarTab label={'Create a review'} destination={'/createreview'} />
                    : null}
                {user === null ? <AppBarTab label={'Sign In'} destination={'/signin'} />
                    : <AppBarTab label={'Sign Out'} destination={'/signout'} />}
                {!user ? <AppBarTab label={'Sign Up'} destination={'/signup'} /> : null}
                {user ? <AppBarTab label={"My reviews"} destination={'/getreviews'} /> : null}
            </ScrollView>
        </View>
    );
};

export default AppBar;