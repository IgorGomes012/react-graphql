//aqui é onde vamos usar a consulta de queries.js
import React, {useEffect, useInsertionEffect} from 'react'
import {useQuery, gql} from '@apollo/client'
import {LOAD_USERS} from '../GraphQL/Queries'

function GetUsers(){

    const {error, loading, data} = useQuery(LOAD_USERS) //esta usando o dados da api que foram consultados no arquivo queries.js

    useEffect(()=>{
      console.log(data)
    },[data])

    return(
        <div>

        </div>
    )
}

export default GetUsers