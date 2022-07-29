import {gql} from '@apollo/client'

export const CREATE_USER_MUTATION = gql`

mutation createUser($fistnName: String! $lastnName: String!) {
    createUser(firstname: $fistnName, lastname: $lastnName){

    }
}

`