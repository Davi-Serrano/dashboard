import {  Box, Flex, Text, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper ,Input, Image,  Stack,  Radio, RadioGroup } from '@chakra-ui/react'
import { useState } from 'react'
import { BtnSendDataClient } from '../components/btn'


export default function Home() {

  const [ email, setEmail ] = useState<string>("")
  const [ name, setName ] = useState<string>("")
  const [ tel, setTell ] = useState<number>()
  const [ topic, setTopic ] = useState<string>("")

   return (
    <Flex
      justify="space-round"
      flexDir="column"
      align="center"
      bgGradient='linear(360deg , black, #8B0000)'
      minH="100vh"
    >
     <Text as="h2" 
     fontSize="40px"
     fontWeight="100"
       color="#fff"
       mb="-.5em"
       pb={["1em", "1em","0" ]}
       >LISTA DE ESPERA
       
     </Text>

      <Flex
      justify="space-around"
      flexWrap="wrap"
      w="90%"
      >

          <Flex 
            flexDir="column"
            align="center"
          >
            <Image 
                src="./Princiapal-_1_.webp" 
                alt="foto1" width="350px" h="400px"/>

            <Text 
                      fontSize="md"
            >
            Poxa, infelizmente as vagas para <br /> 
            o meu método completo de vendas na Shopee esgotaram,<br /> 
             mas assim que surgir uma vaga pode <br />
             deixar que te aviso!
            </Text>
          </Flex>

          <Flex 
            flexDir="column"
            justify="center"
            align="flex-start"
            mt="5em"
          >
            <Flex flexDir="column">
              <Input
                variant='unstyled'
                border="none"
                borderBottom="1px solid white"
                borderRadius="none"
                placeholder="Nome"
                pl=".5em"
                _placeholder={{
                  color: "white"
                }}

                color="white"
                
                m=" .7em 0"/>
             
              <Input 
                variant='unstyled'
                border="none"
                borderBottom="1px solid white"
                borderRadius="none"
                placeholder="Email"
                pl=".5em"
                _placeholder={{
                  color: "white"
                }}

                color="white"
                
                m=" .7em 0"/>

                <NumberInput
                variant="unstyled" 
                >
                  <NumberInputField 
                  border="none"  
                  borderBottom="1px solid white"
                  borderRadius="none"
                  placeholder="Telefone"
                  pl=".5em"
                  width="85%"
                  _placeholder={{
                    color: "white"
                  }}
  
                  color="white"
                  
                  m=" .7em 0"
                />
                  <NumberInputStepper>
                  
                  </NumberInputStepper>
                </NumberInput>

              <Input 
                variant='unstyled'
                border="none"
                borderBottom="1px solid white"
                borderRadius="none"
                placeholder="Assunto"
                pl=".5em"
                _placeholder={{
                  color: "white"
                }}

                color="white"
                
                m=" .7em 0"/>
            </Flex>
           
           
            <RadioGroup mt="1em" defaultValue='2' >
              <Stack  spacing={3} direction={"column"}>          
                
                <Radio colorScheme='green' value='1'>Já vendo na Shopee </Radio>
                <Radio colorScheme='green' value='2'> Nunca vendi na Shopee </Radio>

              </Stack>
            </RadioGroup>
            
            
            <Text 
              mt="3em"
            >
            contato@thaynaniely.com.br
            </Text>
          </Flex>

      </Flex>

  </Flex>
  )
}

