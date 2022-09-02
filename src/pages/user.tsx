import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

import {  Flex, Text, Table, Tbody, useMediaQuery, Box, Link } from '@chakra-ui/react'

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

    <Flex 
      
    >

        <SideBar />
        <Flex 
          flexDir="column"
          w="85%"
          justify="flex-start"
          align="center"
          color="black"
        >
           <Text my="1em" as="h2" fontSize="md">Usuários registrados hoje: 12</Text>

            <Flex w="100%" my="1em" justify="space-around">

                <Flex display={ isLargerThan900 ? "flex" : "none"} flexDir="column"  w="45%">
                  <Chart
                    chartType="Bar"
                    width="100%"
                    height="250px"
                    data={data}
                    options={options}
                  />

                  <Text textAlign="center" fontWeight="bold"> Cadastros na Semana</Text>
                </Flex>

                <Flex flexDir="column"  w={isLargerThan900 ? "45%": "100%"} >
                  <Chart
                    chartType="Bar"
                    width="100%"
                    height="250px"
                    data={data}
                    options={options}
                  />

                  <Text  textAlign="center" fontWeight="bold"> Cadastros no Total</Text>
                </Flex>

        </Flex>

          { isLargerThan900 ? 
          <Box mt="0">
            <Text textAlign="center" as="h2">Usuários Cadastrados</Text>

            <Table mx="auto" variant="striped" w="90%">
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
            
                <Text 
                  textAlign="center" 
                  fontWeight="bold" 
                  color="#000"
                  _hover={{
                    cursor: "pointer",
                    opacity: ".8"
                  }}
                >
                  <Link href="/listadeclientes" >  Ver lista Completa &gt;&gt; </Link>
                </Text>

          </Box>
            :
            <Flex w="80%" flexDir="column" align="center" justify="center" >
              
              <Text 
                  textAlign="center" 
                  fontWeight="bold" 
                  color="#000"
                  _hover={{
                    cursor: "pointer",
                    opacity: ".8"
                  }}
                >
                  <Link href="/listadeclientes" >  Ver lista Completa &gt;&gt; </Link>
                </Text>
             
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