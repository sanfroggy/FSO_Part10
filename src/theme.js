//Importing Constants from expo-constants
import Constants from 'expo-constants';
import { Platform } from 'react-native';

/*Defining a variable for theme to create reusable
ui and layout styles. */
const theme = {
    aesthetics: {
        layout: {
            smallHorizontalRowFlexContainer: {
                flexDirection: 'row',
                height: 60,
                opacity: 1,
                flexShrink: 1
            },
            smallCenteredHorizontalRowFlexContainer: {
                flexDirection: 'column',
                flexGrow: 1,
                alignItems: 'center',
                padding: 30,
                height: 40,
                opacity: 1
            },
            smallVerticalColumnFlexContainer: {
                flexDirection: 'column',
                height: 60,
                opacity: 1,
                flexShrink: 1,
                marginRight: 20
            }
        },
        colors: {
            primary: 'white',
            secondary: 'black',
            textError: 'darkred',
            textPrimary: 'black',
            textSecondary: 'white'
        },
        topBar: {
            flexDirection: 'row',
            backgroundColor: 'black',
            opacity: 0.90,
            paddingTop: Constants.statusBarHeight,
            padding: 25,
            height: 85,
        },
        smallContainerWithSilverBrgd: {
            height: 20,
            right: 120,
            width: 80,
            backgroundColor: 'silver'
        },
        largeContainerWithSilverBrgd: {
            height: 25,
            width: 250,
            alignItems: 'center',
            backgroundColor: 'silver'
        },
        smallImage: {
            width: 50,
            height: 50
        }
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            default: 'System',
        })
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
        growingLabel: {
            fontWeight: 'normal',
            fontSize: 16,
            overflow: 'visible',
            flexGrow: 1
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
        },
    }
};

export default theme;
