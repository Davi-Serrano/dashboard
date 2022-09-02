import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

import {  Flex, Text, Table, Tbody, useMediaQuery, Box } from '@chakra-ui/react'

import { fauna } from "../services/fauna";
import { query as q} from "faunadb"


import {Header} from "../components/Header"
import { SideBar } from "../components/Sidebar";
import { TableRow } from "../components/TableRow";
import { Card } from "../components/Card";





export default function ClientesCadastrados(users: any,){
  const [ isLargerThan900 ] = useMediaQuery('(min-width: 900px)');
  
  const [user, setUser] = useState([
{    name: ""},
{    email: ""},
{    tel: ""},
{    option: ""},
{    topic: ""},
{    createdAt: ""},

  ])

  useEffect(()=>{
    setUser(users.users)
  }, [])

    return(

      <Flex
        flexDir="column" 
      >
        <Header />

        <Flex>
            <SideBar />
     
            <Flex 
              flexDir="column"
              w="85%"
              minH="100vh"
              justify="flex-start"
              align="center"
              color="black"
            >
              <Text my="1em" as="h2" fontSize="md">Usuários Total:{user.length < 10 ? "0"+ user.length : user.length  }</Text> 
              <Text my="1em" as="h3" fontSize="md">Usuários registrados hoje: 12</Text>     

              { isLargerThan900 ? 
              <Box mt="0">
                <Text textAlign="center" as="h2">Usuários Cadastrados:</Text>

                <Table mx="auto" variant="striped" w="90%">
                  <Tbody p="0">
                      {
                        user.map( (user: any, index: number) => 
                        
                        <TableRow 
                          name={user.name} 
                          email={user.email} 
                          tel={user.tel} 
                          option={user.option} 
                          topic={user.topic}
                          createdAt={user.createdAt}
                          index={index}
                          key={user.name}
                        
                        /> 
                        )
                        
                      }
                  </Tbody>
                </Table>  
                

              </Box>
                :
                <Flex 
                  w="80%" 
                  flexDir="column" 
                  align="center" 
                  justify="center" >
                  

                  {
                    user.map( (user: any, index: number) => 
                      <Card 
                      name={user.name} 
                      email={user.email} 
                      tel={user.tel} 
                      option={user.option} 
                      topic={user.topic}
                      createdAt={user.createdAt}
                      key={user.name} 
                      />
                    )
                  }   

                </Flex>
              }
                  
            </Flex>

        </Flex>   



      </Flex>
    )    
}

export const getServerSideProps:GetServerSideProps = async ()=>{

  const myUser = []

  const users: any = await fauna.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('users'))),
      q.Lambda((show) => q.Get(show))
    )
    )
    
    for(let i = 0; i < users.data.length ; i++){
      myUser.push(users.data[i].data)
    }

  return {
    props:{
      users: myUser
    }
  }
}