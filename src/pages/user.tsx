import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

import {  Flex, Text, Table, Tbody, Td, Tr, useMediaQuery, Box } from '@chakra-ui/react'

import { fauna } from "../services/fauna";
import { query as q} from "faunadb"

import { Chart } from "react-google-charts"

import {Header} from "../components/Header"
import { SideBar } from "../components/Sidebar";
import { TableRow } from "../components/TableRow";


 const data = [
  ["", "", ""],
  ["2014",  400, 200],
  ["2015",  460, 250],
  ["2016",  1120, 300],
  ["2017",  540, 350],
];

 const options = {
  chart: {
  },
};



export default function User(users: any){
  const [ isLargerThan900 ] = useMediaQuery('(min-width: 900px)');
  
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
      >
      <Header />

    <Flex >

        <SideBar />
        <Flex 
          flexDir="column"
          justify="flex-start"
          align="center"
          color="black"
          
          >
           <Text my="1em" as="h2">Usuários registrados hoje: 12</Text>

            <Flex w="100%" justify="space-around">

                <Flex flexDir="column"  w="45%">
                  <Chart
                    chartType="Bar"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                  />

                  <Text textAlign="center" fontWeight="bold"> Cadastros na Semana</Text>
                </Flex>

                <Flex flexDir="column" w="45%">
                  <Chart
                    chartType="Bar"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                  />

                  <Text  textAlign="center" fontWeight="bold"> Cadastros no Total</Text>
                </Flex>

        </Flex>

          { isLargerThan900 ? 
          <Box mt="0">
            <Text as="h2">Clientes Cadastrados</Text>

            <Table variant="striped" w="100%">
              <Tbody p="0">
              {
                a.map( (user: any, index: number) => 
                
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
            
                <Text color="#000">Ver lista Completa </Text>

          </Box>
            :
            <Flex w="80%" flexDir="column" align="center" justify="center" >
              {
                a.map((user: any, index: number) => 
                
                <Flex bg="#888"  key={index} flexWrap="wrap" justify="center" maxW="320px" fontSize="16px" fontWeight="bold" p="1em" m="1em 0" border="1px solid black" >

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

  const myUser = []

  const users: any = await fauna.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('users'))),
      q.Lambda((show) => q.Get(show))
    )
    )
    

    for(let i = 0; i < 3; i++){
      myUser.push(users.data[i].data)
    }

  return {
    props:{
      users: myUser
    }
  }
}