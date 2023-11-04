//Importing the useQuery hook and GET_REPOS query.
import { useQuery } from '@apollo/client';

import { GET_REPOS } from '../services/queries';

/*Defining the useRepositories custom hook to return data from 
the backend with GrapgL. */
const useRepositories = () => {

    const { data, error, loading } = useQuery(GET_REPOS, {
        fetchPolicy: 'cache-and-network'
    });


    return { data, loading } 

    
};

export default useRepositories;
