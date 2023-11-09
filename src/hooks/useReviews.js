/*Importing the useMutation and useQuery hooks as well as
the CREATE_REVIEW mutation and ME query. */
import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../services/mutations'
import { useQuery } from '@apollo/client';
import { ME } from '../services/queries'

//Defining a hook to use the CREATE_REVIEW mutation.
const useReview = () => {

    /*Defining a variable for the useMutation hook and the result of the
    operation. Errors are printed to console. */
    const [newReview, result] = useMutation(CREATE_REVIEW, {
        onError: (error) => {
            console.log(error)
        }
    })

    /*Defining a function to create a new review if correct input is provided.
    On succesful mutation the id of the reviewed repository is returned. */
    const postReview = async ({ repoOwner, repoName, rating, reviewText }) => {

        const reviewed = await newReview({ variables: { repoOwner: repoOwner, repoName: repoName,
            rating: rating, review: reviewText } })
        if (reviewed) {
            console.log(reviewed)
            return reviewed
        }

    }

    return [postReview, result]
}

export default useReview;

/*Defining a hook to use the ME mutation to return the
reviews posted by the logged in user. */
export const useReviews = () => {

    const { data, loading } = useQuery(ME, {
        variables: { includeReviews: true },
        fetchPolicy: 'cache-and-network',
        onError: (error) => {
            console.log(error)
        },
        
    });

    if (!loading) {
        const reviewData = data.me.reviews.edges
        return { reviewData, loading }
    }
    
}
