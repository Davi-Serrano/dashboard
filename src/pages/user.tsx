import { GetServerSideProps } from "next";
import {  Flex, Text, Table, Tbody, Td, Tr, useMediaQuery, Box } from '@chakra-ui/react'
import { fauna } from "../services/fauna";
import { query as q} from "faunadb"
import { useEffect, useState } from "react";

import {Header} from "../components/Header"
import { SideBar } from "../components/Sidebar";
import { TableRow } from "../components/TableRow";


interface CProps{
  name: string;
  tel: string;
  email: string;
  option: string;
  topic: string;
  createdAt: Date;
}

interface UserProps{
  users: CProps[]
}

export default function User(users: UserProps){
  const [ isLargerThan900 ] = useMediaQuery('(min-width: 900px)');
  
  const [a, setA] = useState<any>([
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
      >
      <Header />

    <Flex >

        <SideBar />
        <Flex 
          flexDir="column"
          justify="space-between"
          align="center"
          color="black"
          >
            <Text as="h2">Clientes Cadastrados</Text>

          { isLargerThan900 ? 

            <Table variant="striped" w="80%">
              <Tbody p="0">
              {
                a.map( (user: CProps, index: number) => 
                
                <TableRow 
                  name={user.name} 
                  email={user.email} 
                  tel={user.tel} 
                  option={user.option} 
                  topic={user.topic}
                  createdAt={user.createdAt}
                  index={index}
                
                /> 
                )
                
              }
              </Tbody>
            </Table>  
            :
            <Flex w="80%" flexDir="column" align="center" justify="center" >
              {
                a.map( (user: any, index: number) => 
                
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

      </Flex>   



      </Flex>
    )    
}

export const getServerSideProps:GetServerSideProps = async ()=>{

  const myUser: UserProps[] = []

  const users: any = await fauna.query(
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