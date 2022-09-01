
import { Flex, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"

export function Header(){

    const  router = useRouter()

    return(
        <Flex
            bg="black"
            justify="space-between"
            align="center"
            maxW="100%"
            p="0 2em"
        >
            <Text as="h2"
                onClick={()=> router.push("/user") }
                _hover={{
                    cursor: "pointer",
                    opacity: ".8"
                }}
            >Agência Elity</Text>
            <Text as="h4"> Sair</Text>
        </Flex>
    )
}