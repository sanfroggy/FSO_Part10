/*Importing the useParams and useRepository hooks, as well as the
StyleSheet, Flatlist and View components. Also importing the defined RepositoryItem 
and SingleReview components, as well as themes. */
import { useParams } from 'react-router-native'
import { StyleSheet, View, FlatList } from 'react-native'
import RepositoryItem from './RepositoryItem'
import SingleReview from './SingleReview'
import { useRepository } from '../hooks/useRepositories'
import themes from '../theme'

//Defining a component used to display the information of a single repository.
const SingleRepo = () => {

    //Defining inline-styles for separators and containers.
    const styles = StyleSheet.create({
        separator: {
            height: 10,
            backgroundColor: themes.aesthetics.colors.secondary,
        },
        container: {
            flexGrow: 1,
            flexShrink: 1,
        },
    });

    //Getting the id parameter from the url using the useParams hook.
    const id = useParams().id

    /*Using the define duseRepository hook to get the data of the
    repository ot be passed on to the RepositoryItem component. */
    const repoQuery = useRepository(id)

    let reviewNodes

    //Defining an item separator component used when rendering the array.
    const ItemSeparator = () => <View style={styles.separator} />;

    //Getting an array of reviews related to the received repository object.
    if (!repoQuery.loading) {
        reviewNodes = repoQuery.data.repository.reviews
            ? repoQuery.data.repository.reviews.edges.map(edge => edge.node)
            : undefined;
    }

    /*If repoQuery has finished loading, returning a RepositoryItem
    component with the data of the query response. Also using a FlatList 
    component to display a scrollable list of reviews. */
    return (
        <View style={{flex: 1}}>
            <View>
                {!repoQuery.loading ? <FlatList
                nestedScrollEnabled={false}
                data={reviewNodes}
                ItemSeparatorComponent={ItemSeparator}
                ListHeaderComponent={() =>
                        <RepositoryItem repo={repoQuery.data.repository} single={true} />}
                renderItem={({ item }) => (
                        <View style={{flex: 1}}>
                            <SingleReview
                            key={item.id}
                            review={item}
                            />
                        </View>
                    )}
                /> : null }
            </View>
        </View>
    )

}

export default SingleRepo