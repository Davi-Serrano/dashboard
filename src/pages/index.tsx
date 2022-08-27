import { Flex, Text, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper ,Input, Image,  Stack,  Radio, RadioGroup } from '@chakra-ui/react'
import { useState } from 'react'
import { BtnSendDataClient } from '../components/btn'


export default function Home() {

  const [ name, setName ] = useState<string>("")
  const [ email, setEmail ] = useState<string>("")
  const [ tel, setTel ] = useState<string>("")
  const [ topic, setTopic ] = useState<string>("")
  const [ radioCheck, setRadioCheck ] = useState<string>("Nunca vendi na Shopee")



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
                color="white"
                m=" .7em 0"
                _placeholder={{
                  color: "white"
                }}
                onChange={(e)=> setName(e.target.value) } 
                />
             
              <Input 
                variant='unstyled'
                border="none"
                borderBottom="1px solid white"
                borderRadius="none"
                placeholder="Email"
                pl=".5em"
                color="white"
                m=" .7em 0"
                _placeholder={{
                  color: "white"
                }}
                onChange={(e)=> setEmail(e.target.value) }
                />
                <NumberInput
                variant="unstyled" 
                >
                  <NumberInputField 
                  border="none"  
                  borderBottom="1px solid white"
                  borderRadius="none"
                  placeholder="Whatsapp"
                  pl=".5em"
                  width="85%"
                  color="white"
                  m=" .7em 0"
                  _placeholder={{
                    color: "white"
                  }}
                  onChange={(e)=> setTel(e.target.value)}
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
                color="white"
                m=" .7em 0"
                _placeholder={{
                  color: "white"
                }}
                onChange={(e)=> setTopic(e.target.value) }
              />

            </Flex>
           
            <RadioGroup mt="1em" defaultValue='Nunca vendi na Shopee'>
              <Stack  spacing={3} direction={"column"}>          
                
                <Radio colorScheme='#8B0000' value='Já vendo na Shopee' onChange={(e)=>setRadioCheck(e.target.value )} >Já vendo na Shopee </Radio>
                <Radio colorScheme='#8B0000' value='Nunca vendi na Shopee' onChange={(e)=>setRadioCheck(e.target.value )} > Nunca vendi na Shopee </Radio>

              </Stack>
            </RadioGroup>
            
            <BtnSendDataClient 
              name={name}
              email={email}
              tel={tel}
              topic={topic}
              option={radioCheck}
            />
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

