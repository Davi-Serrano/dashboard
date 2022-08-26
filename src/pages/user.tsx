import { GetServerSideProps } from "next";
import {  Flex, Text, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper ,Input, Image,  Stack,  Radio, RadioGroup } from '@chakra-ui/react'
import { fauna } from "../services/fauna";
import { query as q} from "faunadb"
import { useEffect, useState } from "react";
import { parseJSON } from "date-fns";



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
        bg="black"
        minH="100vh"
        >
            {
              a.map( (user) =>(
                <Flex justify="space-around" w="100%" key={user.email} color="white">
                    <Text borderBottom="1px solid white">{user.name}</Text>
                    <Text borderBottom="1px solid white">{user.email}</Text>
                    <Text borderBottom="1px solid white">{user.tel}</Text>
                    <Text borderBottom="1px solid white">{user.option}</Text>                    
                    <Text borderBottom="1px solid white">{user.topic}</Text>
                    <Text borderBottom="1px solid white">{user.createdAt}</Text>

                </Flex>
              ))
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