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

/*Defining a query to get a single repository with a given id.
The query is also used to support infinite scrolling for
repository reviews. */
export const GET_REPO = gql`
    query Repo ($id: ID! $after: String){
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
        reviews (first: 5, after: $after){
          totalCount
          edges {
            node {
              id
              text
              rating
              createdAt
              repositoryId
              user {
                id
                username
              }
            }
            cursor
         }
         pageInfo {
           endCursor
           startCursor
           hasNextPage
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
              id
              rating
              createdAt
              repository {
                fullName
                id
              }
              text
            }
          }
        }
      }
    }
`
