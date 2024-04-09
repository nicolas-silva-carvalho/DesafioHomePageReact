import { Header } from "./Header/Header"
import { Footer } from "./Footer/footer"
import { Container, Divider } from "@chakra-ui/react"

export const Layout = ({ children }: any) => {
    return( 
        <>
        <Header/>
        <Divider marginBottom='24px'/>
        { children }
        <Divider/>
        <Footer/>
        </>
    );
}