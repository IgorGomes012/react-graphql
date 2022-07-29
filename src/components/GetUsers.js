//aqui é onde vamos usar a consulta de queries.js
import React, {useEffect, useState} from 'react'
import {useQuery, gql} from '@apollo/client'
import {LOAD_USERS} from '../GraphQL/Queries'

function GetUsers(){

    const {error, loading, data} = useQuery(LOAD_USERS) //esta usando o dados da api que foram consultados no arquivo queries.js
    const [users, setUsers] = useState([])

    useEffect(()=>{
        if(data){
      setUsers(data.getAllUsers)
      }
    },[data])

    return(
        <div>
           {users.map((val)=>{
             return <h1>{val.fistName}</h1> //vai colocar todos os primeiros nomes na tela
           })}
        </div>
    )
}

export default GetUsers