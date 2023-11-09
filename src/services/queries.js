//Importing gql from Apollo Client.
import { gql } from '@apollo/client';

//Defining a query to get all repositories from the backend.
export const GET_REPOS = gql`
    query Repositories ($orderBy: AllRepositoriesOrderBy, 
        $orderDirection: OrderDirection, $searchKeyword: String) {
      repositories (orderBy: $orderBy, 
          orderDirection: $orderDirection, searchKeyword: $searchKeyword ) {
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
        reviews {
          edges {
            node {
              id
              text
              rating
              createdAt
              user {
                id
                username
              }
            }
         }
      }
    }
    }
`

/*Defining a query to get the currently logged in user and to get
the reviews made by the logged in user if includeReviews is true. */
export const ME = gql`
    query Me($includeReviews: Boolean = false) {
      me {
        id
        username
        reviews @include(if: $includeReviews) {
          edges {
            node {
              rating
              createdAt
              repository {
                fullName
              }
              text
            }
          }
        }
      }
    }
`
