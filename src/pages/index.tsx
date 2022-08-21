import {  Flex, Text, Input, Image, Button, Box, border, Stack, Checkbox, Radio, RadioGroup } from '@chakra-ui/react'


export default function Home() {
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
                placeholder="Telefone"

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
                placeholder="Assunto"

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
            <Box
              bg="#000"
              color="#fff"
              fontSize="20px"
              p=".3em 2em"
              borderRadius="16px"

              mx="auto"
              mt="1em"
              transition=".5s"
              _hover={{
                cursor: "pointer",
                opacity: ".8",

              }}
            >

              Enivar
            </Box>

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

