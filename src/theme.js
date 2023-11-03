//Importing Constants from expo-constants
import Constants from 'expo-constants';

/*Defining a variable for theme to create reusable
ui and layout styles. */
const theme = {
    aesthetics: {
        topBarText: {
            color: 'white'
        },
        topBar: {
            flexDirection: 'row',
            backgroundColor: 'black',
            opacity: 0.90,
            paddingTop: Constants.statusBarHeight,
            padding: 25,
            height: 70,
        }
    },
    fontStyles: {
        normal: {
            fontWeight: 'normal',
            fontSize: 14
        },
        label: {
            fontWeight: 'normal',
            fontSize: 16
        },
        smallHeader: {
            fontWeight: 'bold',
            fontSize: 18
        },
        mediumHeader: {
            fontWeight: 'bold',
            fontSize: 22
        },
        largeHeader: {
            fontWeight: 'bold',
            fontSize: 28
        }
    }
};

export default theme;
