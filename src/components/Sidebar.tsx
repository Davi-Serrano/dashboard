import { Flex, Text, } from "@chakra-ui/react"

export function SideBar(){

    return(
        <Flex
            flexDir="column"
            pl="1em"
            w="20%"
            h="100vh"
            bg="#060606"
        >
            <Text fontSize="28px" mb=".3em" pl="1em" w="80%" borderBottom="1px solid white">Cursos</Text>
            <Text fontSize="22" m="1px 0"  pl="1em">Shopee</Text>
            <Text fontSize="14" m="1px"   pl="2em"> - Clientes Registrados</Text>

        </Flex>
    )
}