/*Importing render and screen from react-native testing library. 
Also importing the RepositoryItem, FlatLikst, View and StyleSheet components,
as well as themes. */
import { render, screen } from '@testing-library/react-native';
import RepositoryItem from '../../components/RepositoryItem'
import { FlatList, View, StyleSheet } from 'react-native';
import themes from '../../theme'

/*Creating the RepositoryListContainer for testing. 
The "pure" code of the RepositoryList component is used
to imitate the actual component and the children of the FlatList used the 
RepositoryItem component, that is means to be tested. */
const RepositoryListContainer = ({ repositories }) => {
    const repositoryNodes = repositories
        ? repositories.edges.map((edge) => edge.node)
        : [];

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

    //Defining an item separator component used when rendering the array.
    const ItemSeparator = () => <View style={styles.separator} />;

    return (
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
    );
};

//Defining a test block to test the RepositoryList component and it's children.
describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {

        /*Defining a test the make sure that the RepositoryItem component
        renders the children of the RepositoryListContainer correctly. */
        it('renders repository information correctly', () => {

            //Defining test data for the RepositoryListContainer component.
            const repositories = {
                totalCount: 8,
                pageInfo: {
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description: 'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description: 'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor:
                            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            };

            //Rendering the RepositoryListContainer component.
            render(<RepositoryListContainer repositories={repositories} />)

            //Getting the View components containing the information of a single child.
            const repositoryItems = screen.getAllByTestId('repoItemContainer');
            const [firstRepoItem, secondRepoItem] = repositoryItems;

            //Testing that the information of the first child renders correctly.
            expect(firstRepoItem).toHaveTextContent('jaredpalmer/formik');
            expect(firstRepoItem).toHaveTextContent('Build forms in React, without the tears');
            expect(firstRepoItem).toHaveTextContent('TypeScript');
            expect(firstRepoItem).toHaveTextContent('1.6k');
            expect(firstRepoItem).toHaveTextContent('21.9k');
            expect(firstRepoItem).toHaveTextContent('88');
            expect(firstRepoItem).toHaveTextContent('3');

            //Testing that the information of the second child renders correctly.
            expect(secondRepoItem).toHaveTextContent('async-library/react-async');
            expect(secondRepoItem).toHaveTextContent('Flexible promise-based React data loader');
            expect(secondRepoItem).toHaveTextContent('JavaScript');
            expect(secondRepoItem).toHaveTextContent('69');
            expect(secondRepoItem).toHaveTextContent('1.8k');
            expect(secondRepoItem).toHaveTextContent('72');
            expect(secondRepoItem).toHaveTextContent('3');

        });
    });
});
