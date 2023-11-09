/*Importing the FlatList, View and StyleSheet components and the defined
SingleReview component. Also importing themes as well as the useReviews hook. */
import SingleReview from './SingleReview'
import { FlatList, View, StyleSheet } from 'react-native';
import themes from '../theme'
import { useReviews } from '../hooks/useReviews'

/*Defining a component to show a list of reviews posted by the logged in user. */
const ReviewList = () => {

    //Defining inline-styles for separators and containers.
    const styles = StyleSheet.create({
        separator: {
            height: 10,
            backgroundColor: themes.aesthetics.colors.secondary
        },
        container: {
            flexGrow: 1,
            flexShrink: 1,
        },
    });

    //Defining a variable for the defined useReviews hook.
    const reviewQuery = useReviews()

    //Defining a variable for the review data.
    let reviewNodes

        reviewNodes = reviewQuery
            ? reviewQuery.reviewData.map(data => data.node)
            : undefined;

    //Defining an item separator component used when rendering the array.
    const ItemSeparator = () => <View style={styles.separator} />;

    /*Returning a FlatList with the data of the logged in users reviews.
    The SinlgeReview component is used to display the data of a single list item. */
    return (
        <View style={{ flex: 1 }} >
            <FlatList
                nestedScrollEnabled={true}
                data={reviewNodes}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item }) => (
                    <View style={styles.container} >
                        <SingleReview
                            key={item.id}
                            review={item}
                            myreview={true}
                        />
                    </View>
                )}
            />
        </View>
    )
}

export default ReviewList