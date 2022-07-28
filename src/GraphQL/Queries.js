import {gql} from '@apollo/client'

//exemplo
export const LOAD_USERS = gql`
getAllusers{
    id
    firstname
    email
    password
}
`
