import { GetServerSideProps } from "next";
import {  Flex, Text, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper ,Input, Image,  Stack,  Radio, RadioGroup } from '@chakra-ui/react'
import { fauna } from "../services/fauna";
import { query as q} from "faunadb"

export default function User(){

    return(

      <Flex>
      </Flex>
    )
}

export const getServerSideProps:GetServerSideProps = async ()=>{

 


  return {
    props:{

    }
  }
}