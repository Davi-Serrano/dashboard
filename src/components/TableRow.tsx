import {   Td, Tr } from '@chakra-ui/react'


interface ClientProps{
    name: string;
    tel: string;
    email: string;
    option: string;
    topic: string;
    createdAt: Date;
    index: number;
      
}

export function TableRow({index, name, email, tel, option, topic, createdAt}: ClientProps){
    return(
        <Tr key={index} fontSize="12px" p="0 .5em" borderBottom="1px solid black" >

        <Td fontWeight="bold">
          {index + 1}
        </Td>
    
        <Td width="150px" textAlign="center">
          {name}
        </Td>


        <Td width="150px" textAlign="center">
          {email}
        </Td>

        <Td width="150px" textAlign="center">
          {tel}
        </Td>


        <Td width="150px" textAlign="center">
          {topic}
        </Td>

        <Td width="350px" textAlign="center">
          {option}
        </Td>


        <Td width="150px" textAlign="center">
            {createdAt}
        </Td>
    </Tr>
    )
}