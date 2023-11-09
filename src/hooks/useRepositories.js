/*Importing the useQuery hook as well as the GET_REPOS 
and GET_REPO queries. */
import { useQuery } from '@apollo/client';
import { GET_REPO } from '../services/queries'
import { GET_REPOS } from '../services/queries';

/*Defining the useFiltered custom hook to return data from 
the backend with GraphQL. Arguments received are set to be the values
of variables in the defined GET_REPOS query and they define
the sorting method used as well as the string used for filtering. */
const useFiltered = ({ filterString, orderDir, sortBy }) => {

    const { data, loading } = useQuery(GET_REPOS, {
        fetchPolicy: 'cache-and-network',
        variables: { searchKeyword: filterString, orderBy: sortBy, orderDirection: orderDir },
        onError: (error) => {
            console.log(error)
        }
    });

    return { data, loading }
}

export default useFiltered;

/*Defining an useRepository custom hook to return the data of one
repository, with the given id from the backend with GrapgL. */
export const useRepository = ({ id }) => {

    /*Defining data, loading and fetchMore variables related to the
    GET_REPO query. */
    const { data, loading, fetchMore } = useQuery(GET_REPO, {
        variables: { id: id },
        fetchPolicy: 'cache-and-network',
        onError: (error) => {
            console.log(error)
        },
        onSuccess: () => {
            console.log(data)
        }
    });

    /*Defining a function to check if more results can be fetched.
    If the query is not loading and the reviews list has next page
    more can be fetched. */
    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

        if (!canFetchMore) {
            return;
        }

        /*If more can be fetched the cursor of the last querys final
        result is set to be the value of the after variable of the new query. */
        fetchMore({
            variables: {
                after: data?.repository.reviews.pageInfo.endCursor,
                id,
            },
        });
    };

    /*Returning review data, fetchMore function, loading data and the 
    result data of the query. */
    return {
        reviews: data?.repository.reviews,
        fetchMore: handleFetchMore,
        loading,
        data
    }
}

/*Defining the useSorted custom hook to return data from 
the backend with GraphQL. Arguments received are set to be the values
of variables in the defined GET_REPOS query and they define
the sorting method used. */
export const useSorted = ({ orderDir, sortBy }) => {

   const { data, loading } = useQuery(GET_REPOS, {
        fetchPolicy: 'cache-and-network',
        variables: { orderBy: sortBy, orderDirection: orderDir },
        onError: (error) => {
            console.log(error)
        }
    });

    return { data, loading }
}
