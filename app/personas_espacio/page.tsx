//----------------Imports---------------//
import Header from "../components/header";
import Footer from "../components/footer";
import { PEOPLE_IN_THE_SPACE } from "../components/API/PEOPLE_IN_SPACE";
import { PeopleInTheSpaceTable } from "../components/tables";
import Utils from "../components/utils";
//----------------Construcción página exoplanetas------------------//
const PeopleInTheSpacePage =  async () =>{
    const data = await Utils.DataFetcher(PEOPLE_IN_THE_SPACE.QUERY);
    return (
        <>
            <Header />
            <main className="flex justify-center">
                <h2 className="font-poppins text-center font-bold text-6xl lg:text-8xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-sky-500 dark:from-pink-500 to-purple-800 dark:to-purple-800 shadow-around" id="title">
                    HAY {data.number} HUMANOS EN EL ESPACIO
                </h2>
            </main>
            <section id="table_container" className="w-4/5 m-auto mt-14">
                {<PeopleInTheSpaceTable people={data.people} />}
            </section>
            <Footer />
        </>
    )
} 

export default PeopleInTheSpacePage;