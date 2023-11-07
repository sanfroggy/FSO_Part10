/*Importing FlatList, View and Stylesheet components from react-native.
Also importing themes, the RepositoryItem component and the defined
useRepositories hook. */
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem'
import themes from '../theme'
import useRepositories from '../hooks/useRepositories'; 

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

//Defining a component to list repository data.
const RepositoryList = () => { 

    //Using the custom useRepositories hook to get repository data.
    const repositories = useRepositories();

    let repositoryNodes

    // Get the nodes from the edges array
    if (!repositories.loading) {
        repositoryNodes = repositories
            ? repositories.data.repositories.edges.map(edge => edge.node)
            : undefined;
    }

    //Defining an item separator component used when rendering the array.
    const ItemSeparator = () => <View style={styles.separator} />;

    /*Defining a RepositoryList component used to break the array into single items.
    Data is passed to a FlatList component, which then defines a RepositoryItem 
    component for each individual object inside the renderItem prop. */
    return (
        <View style={{ flex: 1}} >
        <FlatList
            nestedScrollEnabled={true}
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (
                    <View style={styles.container} >
                        <RepositoryItem
                            key={item.id}
                            repo={item}

                        />
                    </View>
                )}
            />
        </View>
    );

}

export default RepositoryList;