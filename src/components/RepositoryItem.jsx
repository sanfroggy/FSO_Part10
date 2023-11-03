//Importing Text component from react-native.
import { Image, View } from 'react-native';
import Text from './Text'
import themes from '../theme'

/*Defining a component to display the data of a single item from a
list of items. The item is received as a parameter. */
const RepositoryItem = ( {repo }) => { 

    //Defining a function to split large numbers by thousands
    const splitByThousand = (value) => {
        return value/1000
    }

    /*Returning a styled list of repository objects. Layouts and aesthetics are defined
    in theme. Images are also received from the url field of the received repo object. */
    return (
        <>
            <View style={themes.aesthetics.listStyle} >

                <View style={themes.aesthetics.layout.smallHorizontalRowFlexContainer} >
                    <Image style={themes.aesthetics.smallImage} source={{
                        uri: repo.ownerAvatarUrl
                    }} />
                    <View style={themes.aesthetics.layout.smallVerticalColumnFlexContainer}> 
                        <Text style={themes.fontStyles.mediumHeader} color='textPrimary'> {repo.fullName}</Text>
                        <Text style={themes.fontStyles.label} color='textPrimary'>  {repo.description}{"\n"}{"\n"}</Text>

                    </View>

                </View>

                <View style={themes.aesthetics.layout.smallCenteredHorizontalRowFlexContainer} >
                    <View style={themes.aesthetics.smallContainerWithSilverBrgd} >
                        <Text style={themes.fontStyles.label} color='textSecondary'>{repo.language}</Text>
                    </View>
                </View>

                <View style={themes.aesthetics.layout.smallHorizontalRowFlexContainer} >
                    <View style={themes.aesthetics.layout.smallVerticalColumnFlexContainer}>
                        <Text style={themes.fontStyles.normal} color='textPrimary'>{repo.stargazersCount > 1000 ?
                            splitByThousand(repo.stargazersCount).toFixed(1) + "k" : 
                                repo.stargazerCount} </Text>
                        <Text style={themes.fontStyles.normal} color='textPrimary'>Stars         </Text>
                    </View>
                    <View style={themes.aesthetics.layout.smallVerticalColumnFlexContainer}> 
                        <Text style={themes.fontStyles.normal} color='textPrimary'>{repo.forksCount > 1000 ?
                            splitByThousand(repo.forksCount).toFixed(1) + "k" :
                            " " + repo.forksCount}</Text>
                        <Text style={themes.fontStyles.normal} color='textPrimary'>Forks        </Text>
                    </View>
                    <View style={themes.aesthetics.layout.smallVerticalColumnFlexContainer}> 
                        <Text style={themes.fontStyles.normal} color='textPrimary'>{repo.reviewCount > 1000 ?
                            splitByThousand(repo.reviewCount).toFixed(1) + "k" :
                                "      " + repo.reviewCount}</Text>
                        <Text style={themes.fontStyles.normal} color='textPrimary'>Reviews       </Text>
                    </View>
                    <View style={themes.aesthetics.layout.smallVerticalColumnFlexContainer}> 
                        <Text style={themes.fontStyles.normal} color='textPrimary'>{repo.ratingAverage > 1000 ?
                            splitByThousand(repo.ratingAverage).toFixed(1) + "k" :
                            "    " + repo.ratingAverage}</Text>
                        <Text style={themes.fontStyles.normal} color='textPrimary'>Ratings       </Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default RepositoryItem