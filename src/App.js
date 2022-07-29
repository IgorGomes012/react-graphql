import React from "react"
import "./App.css"
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from,} from '@apollo/client'
import {onError} from '@apollo/client/link/error'
import GetUsers from "./components/GetUsers"
import Form from '../src/components/Form'


const errorLink = onError (({graphqlErrors, networkErrors}) =>{
  if(graphqlErrors){
    graphqlErrors.map(({message, location, path})=>{
      alert(`GraphQL Error ${message}`)
    })
  }
})
const link = from([
  errorLink,
  new HttpLink({ url:''}),
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {
  return (
    <ApolloProvider client={client}>
      <GetUsers /> 
      <Form />
    </ApolloProvider>
  )
}

export default App