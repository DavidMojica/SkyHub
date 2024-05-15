import EChartsReact from "echarts-for-react";

const PlanetsGravityChart = ():React.JSX.Element => {
  
      const chartOptions: any = {
        title: [
          {
            text: 'Gravedad por planetas'
          }
        ],
        polar: {
          radius: [30, '80%']
        },
        angleAxis: {
          max: 25,
          startAngle: 75
        },
        radiusAxis: {
          type: 'category',
          data: ['Mercurio', 'Venus', 'Tierra', 'Marte', 'Jupiter', 'Saturno', 'Urano', 'Neptuno', 'Pluton']
        },
        tooltip: {},
        series: {
          type: 'bar',
          data: [
            3.7
          , 8.87
          , {value: 9.7, itemStyle: {color: '#0d6efd'}}
          , 3.71
          , {value: 24.8, itemStyle: {color: '#a90000'}}
          , 10.4
          , {value: 8.9, itemStyle: {color: '#E5BE01'}}
          , 11.2
          , {value: 0.62, itemStyle: {color: '#008f39'}}
            ],
          coordinateSystem: 'polar',
          label: {
            show: true,
            position: 'middle', // or 'start', 'insideStart', 'end', 'insideEnd'
            formatter: '{b}: {c} m/s'
          }
        }
      };

    return (
        <section>
          <EChartsReact
              option={chartOptions}
              style={{ height: '400px' }}
          />
        </section>
    );
};

export default PlanetsGravityChart;
