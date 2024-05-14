import Utils from "../utils"
import { SYSTEME_SOLAIRE_API } from "../API/SYSTEME_SOLAIRE_API";
import EChartsReact from "echarts-for-react";

export const PlanetsTemperatureChart = async () => {
    const planetsData: any[] = [];
    const planetas = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto']
    
    const getPlanetsData = async () =>{
      for (const planeta of planetas) {
          const data = await Utils.DataFetcher(`${SYSTEME_SOLAIRE_API.CORPUS}${planeta}`);
          planetsData.push(data);
      }

      return {
          title: {
              text: 'Temperatura promedio de los planetas del sistema solar'
          },
          tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
          },
          xAxis: {
            type: 'category',
            data: planetas
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: planetsData.map(planeta => planeta.avgTemp -273), //kelvin to celcius
            type: 'bar'
          }]
      };
    }

    return (
    <EChartsReact
        option={await getPlanetsData()}
        style={{ height: '400px' }} 
    />
  )
}