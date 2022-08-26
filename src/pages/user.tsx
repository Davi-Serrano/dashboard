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
        color="black"
        >
          <Text as="h2">Clientes Cadastrados</Text>

          <Flex flexDir="column" justify="center"  p="1em 0" border="1px solid black" borderRadius={16} >
            {
              a.map( (user, index) => 
               
                    <Flex  key={user.email} fontSize="12px" p="0 .5em" borderBottom="1px solid black" >

                        <Text fontWeight="bold">{index + 1}</Text>
                    
                        <Text width="150px" textAlign="center">
                          {user.name}
                        </Text>


                        <Text width="150px" textAlign="center">
                          {user.email}
                        </Text>

                        <Text width="150px" textAlign="center">
                          {user.tel}
                        </Text>


                        <Text width="150px" textAlign="center">
                          {user.topic}
                        </Text>

                        <Text width="150px" textAlign="center">
                          {user.option}
                        </Text>


                        <Text width="150px" textAlign="center">
                            {user.createdAt}
                        </Text>
                    </Flex>
                  )
               
            }
          
              </Flex>



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