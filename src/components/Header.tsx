import { Flex, Text } from "@chakra-ui/react"

export function Header(){
    return(
        <Flex
            bg="black"
            justify="space-between"
            align="center"
            maxW="100%"
            p="0 2em"
        >
            <Text as="h2">Agência Elity</Text>
            <Text as="h4"> Sair</Text>
        </Flex>
    )
}