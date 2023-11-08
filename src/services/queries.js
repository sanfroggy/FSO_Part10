//Importing gql from Apollo Client.
import { gql } from '@apollo/client';

//Defining a query to get all repositories from the backend.
export const GET_REPOS = gql`
    query Query {
      repositories {
        edges {
          node {
            id
            fullName
            ratingAverage
            reviewCount
            stargazersCount
            forksCount
            ownerAvatarUrl
            description
            language
            ownerAvatarUrl
          }
        }
      }
    }
`

//Defining a query to a single repository with a given id.
export const GET_REPO = gql`
    query Repo ($id: ID!){
      repository(id: $id) {
        id
        fullName
        ratingAverage
        reviewCount
        stargazersCount
        forksCount
        ownerAvatarUrl
        description
        language
        ownerAvatarUrl
        url
      }
    }
`

//Defining a query to get the currently logged in user.
export const ME = gql`
    query Me {
      me {
        id
        username
      }
    }
`
