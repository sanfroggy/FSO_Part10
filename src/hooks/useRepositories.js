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
export const useRepository = (id) => {

    const { data, loading } = useQuery(GET_REPO, {
        variables: { id: id },
        fetchPolicy: 'cache-and-network',
        onError: (error) => {
            console.log(error)
        }
    });

    return { data, loading }
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
