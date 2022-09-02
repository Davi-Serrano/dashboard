import {  Flex, Text} from '@chakra-ui/react'

interface ClientProps{
    name: string;
    tel: string;
    email: string;
    option: string;
    topic: string;
    createdAt: Date;      
}


export function Card({ name, email, tel, option, topic, createdAt}: ClientProps){
    return(
        <Flex 
            flexDir="column"
            align="center"
            p="1em"
            m="1em"
            bg="#D9D9D9"
        >
            <Text>
                {name}
            </Text>

            <Text>
                {email}
            </Text>

            <Text>
                {tel}
            </Text>

            <Text>
                {option}
            </Text>

            <Text>
                {topic}
            </Text>

            <Text>
                {createdAt}
            </Text>
        </Flex>
    )
}