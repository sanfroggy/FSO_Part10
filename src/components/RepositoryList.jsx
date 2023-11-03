/*Importing FlatList, View and Stylesheet components from react-native.
Also importing the RepositoryItem component. */
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem'
import themes from '../theme'

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

//Defining an array of repository objects.
const repositories = [
    {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1589,
        stargazersCount: 21553,
        ratingAverage: 88,
        reviewCount: 4,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
    },
    {
        id: 'rails.rails',
        fullName: 'rails/rails',
        description: 'Ruby on Rails',
        language: 'Ruby',
        forksCount: 18349,
        stargazersCount: 45377,
        ratingAverage: 100,
        reviewCount: 2,
        ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
    },
    {
        id: 'django.django',
        fullName: 'django/django',
        description: 'The Web framework for perfectionists with deadlines.',
        language: 'Python',
        forksCount: 21015,
        stargazersCount: 48496,
        ratingAverage: 73,
        reviewCount: 5,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
    },
    {
        id: 'reduxjs.redux',
        fullName: 'reduxjs/redux',
        description: 'Predictable state container for JavaScript apps',
        language: 'TypeScript',
        forksCount: 13902,
        stargazersCount: 52869,
        ratingAverage: 0,
        reviewCount: 0,
        ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
    },
];

//Defining an item separator component used when rendering the array.
const ItemSeparator = () => <View style={styles.separator} />;

/*Defining a RepositoryList component used to break the array into single items.
Data is passed to a FlatList component, which then defines a RepositoryItem 
component for each individual object inside the renderItem prop. */
const RepositoryList = () => {
    return (
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item}) => (
                    <View style={styles.container} >
                        <RepositoryItem
                        key={item.id}
                        repo={item}
                            />
                    </View>
            )}
        />
    );
};

export default RepositoryList;