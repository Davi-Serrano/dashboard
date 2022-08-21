import { Box } from "@chakra-ui/react"
import axios from "axios"

interface ClientProps{
    name: string,
    email: string,
    tel: string,
    topic: string,
    option: string
}

export function BtnSendDataClient({name, email, tel, topic, option}: ClientProps){
    
    const client = {
        name,
        email,
        tel,
        topic,
        option
    }

    const handleClick = async (client: ClientProps)=>{
        try{
            await axios.post("/api/client", client)

        } catch{
            
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