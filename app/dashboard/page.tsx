'use client';
import Footer from "../components/footer"
import Header from "../components/header"
import RainbowTitle from "../components/rainbow_title"
import {PlanetsTemperatureChart} from "../components/charts/planets_temperature_chart";

const Dashboard = () => {

  return (
     <>
        <Header />
        <section className="flex justify-center">
            <RainbowTitle text="Dashboard" />
        </section>
        <main>
          <article className="w-1/2 m-auto">
            <PlanetsTemperatureChart />
          </article>
        </main>
        <Footer />
     </>
  )
}

export default Dashboard
