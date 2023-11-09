//Importing gql from Apollo Client.
import { gql } from '@apollo/client';

//Defining a mutation used to sign in and receive an access token.
export const SIGN_IN = gql`
  mutation ($user: String!, $pwd: String!){
      authenticate(credentials: { username: $user, password: $pwd }) {
        accessToken
      }
}
`

//Defining a mutation used to create a new review for a repository.
export const CREATE_REVIEW = gql`
mutation ($repoOwner: String!, $repoName: String!, 
    $rating: Int!, $review: String!) {
  createReview(review: { ownerName: $repoOwner, repositoryName: $repoName, 
      rating: $rating, text: $review }) {
    id
    repositoryId
  }
}
`

//Defining a mutation used to delete an existing review.
export const DELETE_REVIEW = gql`
mutation($id: ID!) {
    deleteReview(id: $id)
}
`

//Defining a mutation used to create a new user.
export const SIGN_UP = gql`
  mutation ($user: String!, $pwd: String!){
      createUser(user: { username: $user, password: $pwd }) {
        id
        username
      }
}
`