//Importing gql from Apollo Client.
import { gql } from '@apollo/client';

//Defining a query to get all repositories from the backend.
export const GET_REPOS = gql`
    query Query {
      repositories {
        edges {
          node {
            fullName
            ratingAverage
            reviewCount
            stargazersCount
            forksCount
            ownerAvatarUrl
            description
            language
          }
        }
      }
    }
`