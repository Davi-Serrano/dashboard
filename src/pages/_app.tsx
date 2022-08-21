import '../styles/theme.ts'
import type { AppProps } from 'next/app'
import { ChakraProvider} from "@chakra-ui/react" 
import { theme } from '../styles/theme'
import {SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>   
  )
}

export default MyApp
