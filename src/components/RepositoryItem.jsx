//Importing Text component from react-native.
import { Text } from 'react-native';

/*Defining a component to display the data of a single item from a
list of items. The item is received as a parameter. */
const RepositoryItem = ( {repo }) => { 

    return (
        <>
            <Text>{repo.fullName}</Text>
            <Text>{repo.description}</Text>
            <Text>{repo.language}</Text>
            <Text>{repo.stargazersCount}</Text>
            <Text>{repo.forksCount}</Text>
            <Text>{repo.reviewCount}</Text>
            <Text>{repo.ratingAverage}</Text>
        </>
    )
}

export default RepositoryItem