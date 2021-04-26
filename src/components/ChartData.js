import React, { Fragment } from 'react'
import { Bar } from 'react-chartjs-2';

const ChartData = ({data:{confirmed,recovered,deaths}}) => {
    return (
        <Fragment>
            <div className="chart-area">
                <Bar
                    data= {{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            data: [confirmed.value,recovered.value,deaths.value],
                            backgroundColor: [
                                'rgba(0, 0, 255, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(255, 0, 0, 0.5)',
                            ]
                        }]
                    }}
                    options={{
                        legend:{display:false},
                        title:{display:true, text:"Current State in Country"}
                    }}
                />
            </div>
        </Fragment>
    )
}

export default ChartData
