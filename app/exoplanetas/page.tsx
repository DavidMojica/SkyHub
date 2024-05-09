import Header from "../components/header";
import Footer from "../components/footer";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Exoplanetas"
}

const Exoplanetas = ():React.JSX.Element =>{
    return (
        <>
            <Header />
            
            <Footer />
        </>
    )
} 

export default Exoplanetas;