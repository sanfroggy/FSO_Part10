//Importing Constants from expo-constants
import Constants from 'expo-constants';

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
                alignItems: 'center',
                height: 40,
                opacity: 1
            },
            smallVerticalColumnFlexContainer: {
                flexDirection: 'column',
                height: 60,
                opacity: 1,
                flexShrink: 1
            }
        },
        colors: {
            primary: 'white',
            secondary: 'black'
        },
        againstColorfulBgrdText: {
            color: 'white'
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
            flexDirection: 'row',
            heigth: 20,
            width: 80,
            right: 110,
            top: 16,
            backgroundColor: 'silver'
        },
        smallImage: {
            width: 50,
            height: 50
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
        },
    }
};

export default theme;
