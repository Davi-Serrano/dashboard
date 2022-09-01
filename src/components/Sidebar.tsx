import { Flex, Text, Icon } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"



export function SideBar(){

    const [ isClose, setIsClose ] = useState("close")

    const router  = useRouter()


    return(
        <Flex 
            flexDir="column"
            align="start"
            bg="#060606"
        >
            <Icon as={GiHamburgerMenu}
                onClick={()=> isClose === "close" ? setIsClose("open") : setIsClose("close")}
                color="white"
                p="1em"
                boxSize={8}
                _hover={{
                    cursor: "pointer",
                    opacity: ".8"
                }}
            />
            <Flex
            flexDir="column"
            w="100%"
            display={ isClose === "close" ? "none" :"block"}
            >
                <Text fontSize="28px" mb=".3em" pl=".3em" w="80%" borderBottom="1px solid white">Cursos</Text>
                <Text fontSize="22" m="1px 0"  pl="1em">Shopee</Text>
                <Text fontSize="14" m="1px"   px="2em"
                _hover={{
                    cursor: "pointer",
                    opacity: ".8"
                }}
                onClick={()=> router.push("/listadeclientes") }

                > - Clientes Registrados</Text>

            </Flex>
        </Flex>
    )
}