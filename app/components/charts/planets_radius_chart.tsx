import { useState, useEffect } from 'react';
import Utils from "../utils";
import { SYSTEME_SOLAIRE_API } from "../API/SYSTEME_SOLAIRE_API";
import EChartsReact from "echarts-for-react";

const PlanetsRadiusChart = ():React.JSX.Element => {
    const [chartData, setChartData] = useState(null);
    
    useEffect(() => {
        const fetchData = async ():Promise<void> => {
            const planetsData = [];
            const planetas_EN = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'] as const;
            const planetas_ES = ['Mercurio', 'Venus', 'Tierra', 'Marte', 'Jupiter', 'Saturno', 'Urano', 'Neptuno', 'Pluton'] as const;

            for (let i = 0; i < planetas_EN.length; i++){
                const data = await Utils.DataFetcher(`${SYSTEME_SOLAIRE_API.CORPUS}${planetas_EN[i]}`);
                planetsData.push({value: data.equaRadius, name: planetas_ES[i]});
            }

            const chartOptions: any = {
                tooltip: {
                  trigger: 'item'
                },
                legend: {
                  top: '5%',
                  left: 'center'
                },
                series: [
                  {
                    name: 'Comparativo de planetas por su radio',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                      borderRadius: 10,
                      borderColor: '#fff',
                      borderWidth: 2
                    },
                    label: {
                      show: false,
                      position: 'center'
                    },
                    emphasis: {
                      label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                      }
                    },
                    labelLine: {
                      show: false
                    },
                    data: [...planetsData]
                  }
                ]
            };

            setChartData(chartOptions);
        };

        fetchData();
    }, []);

    return (
        <section>
            {chartData && (
                <EChartsReact
                    option={chartData} //Probar con chart options
                    style={{ height: '400px' }}
                />
            )}
        </section>
    );
};

export default PlanetsRadiusChart;
