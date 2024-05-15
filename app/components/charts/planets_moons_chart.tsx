import EChartsReact from "echarts-for-react";
const PlanetsMoonsChart = ():React.JSX.Element => {
  
      const chartOptions: any = {
        title: {
                text: 'Cantidad de lunas de cada planeta.'
            },
        series: [
            {
              name: 'Satélites naturales del planeta',
            type: 'gauge',
            anchor: {
                show: true,
                showAbove: true,
                size: 18,
                itemStyle: {
                color: '#FAC858'
                }
            },
            pointer: {
                icon:
                'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                width: 8,
                length: '80%',
                offsetCenter: [0, '8%']
            },
        
            progress: {
                show: true,
                overlap: true,
                roundCap: true
            },
            axisLine: {
                roundCap: true
            },
            data:  [
                {
                  value: 0,
                  name: 'Mercurio',
                  title: {
                    offsetCenter: ['-40%', '0%']
                  },
                  detail: {
                    offsetCenter: ['-40%', '12%']
                  }
                },
                {
                  value: 0,
                  name: 'Venus',
                  title: {
                    offsetCenter: ['40%', '0%']
                  },
                  detail: {
                    offsetCenter: ['40%', '12%']
                  }
                },
                {
                  value:1,
                  name: 'Tierra',
                  title: {
                    offsetCenter: ['0%', '25%']
                  },
                  detail: {
                    offsetCenter: ['0%', '37%']
                  }
                },
                {
                  value:2,
                  name: 'Marte',
                  title: {
                    offsetCenter: ['-36%', '60%']
                  },
                  detail: {
                    offsetCenter: ['-36%', '72%']
                  }
                },
                {
                  value:95,
                  name: 'Júpiter',
                  title: {
                    offsetCenter: ['0%', '60%']
                  },
                  detail: {
                    offsetCenter: ['0%', '72%']
                  }
                },
                {
                  value:146,
                  name: 'Saturno',
                  title: {
                    offsetCenter: ['36%', '60%']
                  },
                  detail: {
                    offsetCenter: ['36%', '72%']
                  }
                },
                {
                  value:27,
                  name: 'Urano',
                  title: {
                    offsetCenter: ['-36%', '85%']
                  },
                  detail: {
                    offsetCenter: ['-36%', '97%']
                  }
                },
                {
                  value:14,
                  name: 'Neptuno',
                  title: {
                    offsetCenter: ['0%', '85%']
                  },
                  detail: {
                    offsetCenter: ['0%', '97%']
                  }
                },
                {
                  value:5,
                  name: 'Pluton',
                  title: {
                    offsetCenter: ['36%', '85%']
                  },
                  detail: {
                    offsetCenter: ['36%', '97%']
                  }
                }
            ],
            title: {
                fontSize: 14
            },
            detail: {
                width: 40,
                height: 14,
                fontSize: 14,
                color: '#fff',
                backgroundColor: 'inherit',
                borderRadius: 3,
                formatter: '{value}'
            }
            }
        ]
      };
    return (
        <section>
          <EChartsReact
              option={chartOptions}
              style={{ height: '600px' }}
          />
        </section>
    );
};

export default PlanetsMoonsChart;
