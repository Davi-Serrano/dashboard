import { Box, useToast } from "@chakra-ui/react"
import axios from "axios"
import { useRouter } from "next/router";

interface ClientProps{
    name: string,
    email: string,
    tel: string,
    topic: string,
    option: string
}

export function BtnSendDataClient({name, email, tel, topic, option}: ClientProps){
    const router = useRouter()
    const toast = useToast()
    const client = {
        name,
        email,
        tel,
        topic,
        option
    }

    const handleClick = async (client: ClientProps)=>{

        if( tel.length  < 10 || name.length < 5 || email.length < 6 ){
            toast({
                title: 'Erro ao cadastrar!.', 
                position: "top",          
                description: `Por Favor! Prenchaa todo os dados corretamente.`,
                status: 'error',
                isClosable: true,
            })
        }else{
            try{
                await axios.post("/api/client", client)
                toast({
                    title: 'Cadastrado com sucesso', 
                    position: 'top',          
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
                router.push('/cadastrado')
            } catch{
                toast({
                    title: 'Erro ao cadastrar!.', 
                    position: "top",          
                    description: `Erro ao se conectar com o banco de dados por favor tente novamente mais tarde`,
                    status: 'error',
                    isClosable: true,
                })
            }
        }
    }   

    return(
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
                bg: "#222",

              }}
              onClick={()=>handleClick(client)}
            >

              Enivar
            </Box>
    )
}