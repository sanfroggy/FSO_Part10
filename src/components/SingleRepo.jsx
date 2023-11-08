/*Importing the useParams and useRepository hooks, as well as the
StyleSheet and View components and the defined RepositoryItem component. */
import { useParams } from 'react-router-native'
import { StyleSheet, View } from 'react-native'
import RepositoryItem from './RepositoryItem'
import { useRepository } from '../hooks/useRepositories'

//Defining a component used to display the information of a single repository.
const SingleRepo = () => {

    //Defining inline-styles for separators and containers.
    const styles = StyleSheet.create({
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

    /*If repoQuery has finished loading, returning a RepositoryItem
    component with the data of the query response. */
    return (
        <View style={styles.container}>
            {!repoQuery.loading ? <RepositoryItem repo={repoQuery.data.repository} single={true} />
                : null}
        </View>
    )

}

export default SingleRepo