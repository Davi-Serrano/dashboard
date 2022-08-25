import { GetServerSideProps } from "next";
import {  Flex, Text, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper ,Input, Image,  Stack,  Radio, RadioGroup } from '@chakra-ui/react'
import { fauna } from "../services/fauna";
import { query as q} from "faunadb"
import { useEffect, useState } from "react";
import { parseJSON } from "date-fns";

export default function User(users: any){
  const [a, setA] = useState()

  useEffect(()=>{
    setA(users)
  }, [])

  console.log(a)
    return(

      <Flex>
      </Flex>
    )
}

export const getServerSideProps:GetServerSideProps = async ()=>{

  const users:any = await fauna.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('users'))),
      q.Lambda((show) => q.Get(show))
    )
    )
    
      console.log(users.data[0].data.email)
      console.log(users.data[1].data.email)



  return {
    props:{
      users: users.data[1].data.email
    }
  }
}