import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const Detalles = ({ params, }: { params: {idPlaneta:string}; }) : React.JSX.Element =>{
    return (
        <>
            <Header />
            <h2 className="text-5xl text-white">Detalles del planeta {params.idPlaneta} </h2>
            <Footer />
        </>
    )
}

export default Detalles;
