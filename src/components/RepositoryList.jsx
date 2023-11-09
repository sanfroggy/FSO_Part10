/*Importing FlatList, View and Stylesheet components from react-native.
Also importing themes, the OrderBy and RepositoryItem components as well as 
the defined useFiltered hook. */
import { FlatList, View, StyleSheet, TextInput } from 'react-native';
import RepositoryItem from './RepositoryItem'
import themes from '../theme'
import useFiltered from '../hooks/useRepositories';
import OrderBy from './OrderBy'
import { useState } from 'react'
import { useDebounce } from "use-debounce";

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

    /*Defining a "state variable" to control the sort method of the 
    received repository data. */
    const [sortMethod, setSortMethod] = useState('CREATED_AT')
    const [filter, setFilter] = useState('')
    const [debounced] = useDebounce(filter, 500);

    //Using the custom useFiltered hook to get repository data.
    let repositories = useFiltered({ filterString: debounced, sorderDir: 'ASC', sortBy: 'CREATED_AT' });

    /*Getting the value of the state variable and setting the variables accordingly
    when calling the mutation deifned in the useFiltered hook. */
        if (sortMethod === 'CREATED_AT') {
            repositories = useFiltered({ filterString: debounced, orderDir: 'DESC', sortBy: 'CREATED_AT' });
        } else {
            if (sortMethod === 'RATING_AVERAGE_ASC') {
                repositories = useFiltered({ filterString: debounced, orderDir: 'ASC', sortBy: 'RATING_AVERAGE' });
            } else {
                repositories = useFiltered({ filterString: debounced, orderDir: 'DESC', sortBy: 'RATING_AVERAGE' });
            }
        }


    let repositoryNodes

    //If the query is not loading the result is mapped into the repositoryNodes variable.
    if (!repositories.loading) { 
            repositoryNodes = repositories
                ? repositories.data.repositories.edges.map(edge => edge.node)
                : undefined;
     }

    //Defining an item separator component used when rendering the array.
    const ItemSeparator = () => <View style={styles.separator} />;

    /*Defining a RepositoryList component used to break the array into single items.
    Data is passed to a FlatList component, which then defines a RepositoryItem 
    component for each individual object inside the renderItem prop. Also defining 
    a TextInput component for filtering and a defined OrderBy component for sorting
    in the ListHeaderComponent section. */
    return (
        <View style={{ flex: 1 }} >
            <FlatList
                nestedScrollEnabled={true}
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                ListHeaderComponent={<View><TextInput placeholder='Filter by...'
                    style={{ fontSize: 16 }} onChangeText={text => setFilter(text)} />
                    <OrderBy sortOrderValue={sortMethod}
                        setSortOrderValueFnct={setSortMethod} /></View>}
                renderItem={({ item }) => (
                    <View style={styles.container} >
                        <RepositoryItem
                            key={item.id}
                            repo={item}
                            single={false}
                        />
                    </View>
                )}
            />
        </View>
    );

}

export default RepositoryList;