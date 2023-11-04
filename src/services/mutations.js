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
