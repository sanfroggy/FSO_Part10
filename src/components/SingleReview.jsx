//Importing themes and the View and Text components.
import themes from '../theme'
import { View, Text } from 'react-native'

//Defining a component used to display the data of a single review.
const SingleReview = ({ review }) => {

    console.log("Text: " + review.text + ",Id: " + review.id)

    //The date of creation is parsed as substrings and reorchestrated to proper format.
    const createdMonth = review.createdAt.substring(5, 7)
    const createdDate = review.createdAt.substring(8, 10)
    const createdYear = review.createdAt.substring(0, 4)

    /*Returning the rating in a container styled to a circular shape.
    Also returning the user that posted the review, the date when it was posted
    and the text content of the review. */
    return (
        <View style={{ flex: 1 }}>
            <View style={themes.aesthetics.layout.smallHorizontalRowFlexContainer}>

                <View style={themes.aesthetics.mediumCircleContainerWithBorder} >
                    <Text style={themes.fontStyles.mediumHeader} color='textPrimary'> {review.rating}</Text>
                </View>
                
                <View style={themes.aesthetics.layout.smallVerticalColumnFlexContainer}>
                    <Text style={themes.fontStyles.smallHeader} color='textPrimary'> {review.user.username}</Text>
                    <Text style={themes.fontStyles.normal} color='textPrimary'>
                        {createdDate + "." + createdMonth + "." + createdYear}</Text>
                </View>
            </View>
            <View style={themes.aesthetics.layout.smallVerticalColumnFlexContainer}>
                <Text style={themes.fontStyles.normal} color='textPrimary'>  {review.text}</Text>
            </View>
        </View>
    )
}

export default SingleReview
