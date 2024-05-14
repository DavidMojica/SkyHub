import { useState, useEffect } from 'react';
import Utils from "../utils";
import { SYSTEME_SOLAIRE_API } from "../API/SYSTEME_SOLAIRE_API";
import EChartsReact from "echarts-for-react";

const PlanetsTemperatureChart = ():React.JSX.Element => {
    const [chartData, setChartData] = useState(null);
    
    useEffect(() => {
        const fetchData = async ():Promise<void> => {
            const planetsData = [];
            const planetas = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];

            for (const planeta of planetas) {
                const data = await Utils.DataFetcher(`${SYSTEME_SOLAIRE_API.CORPUS}${planeta}`);
                planetsData.push(data);
            }

            const chartOptions: any = {
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
                    data: planetsData.map(planeta => planeta.avgTemp - 273), // Kelvin to Celsius
                    type: 'bar'
                }]
            };

            setChartData(chartOptions);
        };

        fetchData();
    }, []);

    return (
        <section>
            {chartData && (
                <EChartsReact
                    option={chartData}
                    style={{ height: '400px' }}
                />
            )}
        </section>
    );
};

export default PlanetsTemperatureChart;
