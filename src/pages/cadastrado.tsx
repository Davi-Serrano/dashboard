import {  Flex, Text } from '@chakra-ui/react'


export default function Cadastrado() {


   return (
    <Flex
      justify="center"
      align="center"
      bgGradient='linear(360deg , black, #8B0000)'
      minH="100vh"
      minW="100vw"
    >
     <Text p="1em" as="h2">OBRIGADO! Seu cadastro foi realizado com sucesso</Text>

  </Flex>
  )
}

