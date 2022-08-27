import { GetServerSideProps } from "next";
import {  Flex, Text, Table, Tbody, Td, Tr } from '@chakra-ui/react'
import { fauna } from "../services/fauna";
import { query as q} from "faunadb"
import { useEffect, useState } from "react";

export default function User(users: any){
  const [a, setA] = useState([
{    name: ""},
{    email: ""},
{    tel: ""},
{    option: ""},
{    topic: ""},
{    createdAt: ""},

  ])

  useEffect(()=>{
    setA(users.users)
  }, [])

    return(

      <Flex 
        flexDir="column"
        justify="space-between"
        align="center"
        color="black"
        >
          <Text as="h2">Clientes Cadastrados</Text>

          <Table variant="striped" w="80%">
            <Tbody>
            {
              a.map( (user, index) => 
               
                    <Tr  key={user.email} fontSize="13px" p="0 .5em" borderBottom="1px solid black" >

                        <Td fontWeight="bold">
                          {index + 1}
                        </Td>
                    
                        <Td width="150px" textAlign="center">
                          {user.name}
                        </Td>


                        <Td width="150px" textAlign="center">
                          {user.email}
                        </Td>

                        <Td width="150px" textAlign="center">
                          {user.tel}
                        </Td>


                        <Td width="150px" textAlign="center">
                          {user.topic}
                        </Td>

                        <Td width="150px" textAlign="center">
                          {user.option}
                        </Td>


                        <Td width="150px" textAlign="center">
                            {user.createdAt}
                        </Td>
                    </Tr>
                  )
               
            }
            </Tbody>
          </Table>

            
      </Flex>
    )
}

export const getServerSideProps:GetServerSideProps = async ()=>{

  const myUser = []

  const users:any = await fauna.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('users'))),
      q.Lambda((show) => q.Get(show))
    )
    )
    

    for(let i = 0; i < users.data.length; i++){
      myUser.push(users.data[i].data)
    }
      
      



  return {
    props:{
      users: myUser
    }
  }
}