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
            <h4 className="font-poppins w-1/3 text-center mx-auto text-3xl text-gray-902 dark:text-white">
              Aquí se pueden observar diferentes gráficos con información de planetas.
            </h4>
        </section>
        <main>
          <article className="w-1/2 m-auto border border-slate-200 dark:border-purple-700 rounded-xl p-4">
            <PlanetsTemperatureChart />
          </article>
          <article className="w-1/2 m-auto border border-slate-200 dark:border-purple-700 rounded-xl p-4">
            <PlanetsRadiusChart />
          </article>
          <article className="w-1/2 m-auto border border-slate-200 dark:border-purple-700 rounded-xl p-4">
            <PlanetsMoonsChart />
          </article>
          <article className="w-1/2 m-auto border border-slate-200 dark:border-purple-700 rounded-xl p-4">
            <PlanetsGravityChart />
          </article>
        </main>
        <Footer />
     </>
  )
}

export default Dashboard
