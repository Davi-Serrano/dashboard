import { GetServerSideProps } from "next";
import {  Flex, Text, Table, Tbody, Td, Tr, useMediaQuery, Box } from '@chakra-ui/react'
import { fauna } from "../services/fauna";
import { query as q} from "faunadb"
import { useEffect, useState } from "react";

export default function User(users: any){
  const [ isLargerThan1280 ] = useMediaQuery('(min-width: 1280px)');
  
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

        { isLargerThan1280 ? 

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
          :
          <Flex w="80%" flexDir="column" align="center" justify="center" >
            {
              a.map( (user, index) => 
               
               <Flex bg="#888"  key={user.email} flexWrap="wrap" justify="center" maxW="320px" fontSize="16px" fontWeight="bold" p="1em" m="1em 0" border="1px solid black" >

                   <Flex fontWeight="bold" mr="100%">
                     {index + 1}
                   </Flex>
               
                   <Flex width="120px" h="80px" justify="center" align="center"  >
                     {user.name}
                   </Flex>


                   <Flex width="120px" h="80px" justify="center" align="center" >
                     {user.email}
                   </Flex>

                   <Flex width="120px" h="80px" justify="center" align="center" >
                     {user.tel}
                   </Flex>

                   <Flex width="320px" h="80px" justify="center" align="center" >
                     {user.option}
                   </Flex>

                   <Flex width="100px" minH="80px" justify="center" align="center" >
                     Assunto: {user.topic}
                   </Flex>

                   <Flex width="320px" h="80px" justify="center" align="center" >
                       Cadastrado: {user.createdAt}
                   </Flex>
               </Flex>
              )
            } 
          </Flex>
        }
            
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