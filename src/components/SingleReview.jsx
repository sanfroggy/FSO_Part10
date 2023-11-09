//Importing themes and the View and Text components.
import themes from '../theme'
import { View, Pressable, Alert } from 'react-native'
import Text from './Text'
import { useNavigate } from 'react-router-native'
import { useDeleteReview } from '../hooks/useReviews'

//Defining a component used to display the data of a single review.
const SingleReview = ({ review, myreview, refetch }) => {

    //The date of creation is parsed as substrings and reorchestrated to proper format.
    const createdMonth = review.createdAt.substring(5, 7)
    const createdDate = review.createdAt.substring(8, 10)
    const createdYear = review.createdAt.substring(0, 4)

    //Defining a variable for the useNavigate hook.
    const navigate = useNavigate()

    //Defining a variable for the defined useDeleteReview hook.
    const [deleteReview] = useDeleteReview()

    /*Defining a function to delete a review by using the defined useDeleteReview hook.
    Alert is displayed and the user is given a choice to cancel or to confirm the operation.
    If confirmed, the review is deleted, response is printed to the console and 
    the query to get all reviews is refetched using the refetch property defined
    for the query in useReviews hook. */
    const confirmDelete = () => {
        Alert.alert('Confirm deletion',
        `Are you sure you want to delete your review of ${review.repository.fullName}?`,
        [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            { cancelable: true, },
            {
                text: 'Confirm', onPress: async () => {
                    const response = await deleteReview(review.id)
                    refetch()
                    if (!response.loading) {
                        console.log(response)
                    }               
                }
            }
        ]);
    }

    //Defining a function to navigate to the reviewed repository using the useNavigate hook.
    const goToRepo = () => {
        if (myreview === true && review.repository.id) {
            navigate(`/repositories/${review.repository.id}`)
        }
    }

    /*Returning the rating in a container styled to a circular shape.
    Also returning the the date when it was posted and the text content of the review. 
    If myreview is false the username of the user that posted it is returned, if not
    the fullName if the repository reviewed is returned. */
    return (
        <View style={{ flex: 1 }}>
            <View style={themes.aesthetics.layout.smallHorizontalRowFlexContainer}>

                <View style={themes.aesthetics.mediumCircleContainerWithBorder} >
                    <Text style={themes.fontStyles.mediumHeader} color='textPrimary'> {review.rating}</Text>
                </View>
                
                <View style={themes.aesthetics.layout.smallVerticalColumnFlexContainer}>
                    {!myreview ? <Text style={themes.fontStyles.smallHeader} color='textPrimary'> {review.user.username}</Text>
                        : <Text style={themes.fontStyles.smallHeader} color='textPrimary'> {review.repository.fullName}</Text>}
                    <Text style={themes.fontStyles.normal} color='textPrimary'>
                        {createdDate + "." + createdMonth + "." + createdYear}</Text>
                </View>
            </View>
            <View style={themes.aesthetics.layout.smallVerticalColumnFlexContainer}>
                <Text style={themes.fontStyles.normal} color='textPrimary'>  {review.text}</Text>
            </View>
            {myreview ? < View style={themes.aesthetics.layout.smallHorizontalRowFlexContainer}>
                <Pressable style={themes.aesthetics.mediumContainerWithSilverBrgd} onPress={goToRepo}>
                    <Text style={themes.fontStyles.label}
                        color='textSecondary'>View Repository</Text>
                </Pressable>
                <Pressable style={themes.aesthetics.mediumContainerWithRedBrgd} onPress={confirmDelete}>
                    <Text style={themes.fontStyles.label}
                        color='textSecondary'>Delete Review</Text>
                </Pressable>
            </View> : null}
        </View>
    )
}

export default SingleReview
