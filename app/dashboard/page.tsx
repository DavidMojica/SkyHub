'use client';
import Footer from "../components/footer"
import Header from "../components/header"
import RainbowTitle from "../components/rainbow_title"
import PlanetsTemperatureChart from "../components/charts/planets_temperature_chart";
import PlanetsRadiusChart from "../components/charts/planets_radius_chart";
import PlanetsMoonsChart from "../components/charts/planets_moons_chart";
import PlanetsGravityChart from "../components/charts/planets_gravity_chart";
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
          <article className="w-1/2 m-auto">
            <PlanetsRadiusChart />
          </article>
          <article className="w-1/2 m-auto">
            <PlanetsMoonsChart />
          </article>
          <article className="w-1/2 m-auto">
            <PlanetsGravityChart />
          </article>


        </main>
        <Footer />
     </>
  )
}

export default Dashboard
