import React, {Component} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'

class Chart extends Component{
    constructor(){
        super();
        this.state = {
            chartData: {
                labels: ['Bills', 'Expenses', 'Savings', 'Gas', 'Leisure','Grocery', 'Emergency'],
                datasets:[
                    {
                        label: 'Amounts',
                        data: [
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor:[
                            'springgreen',
                            'springgreen',
                            'springgreen',
                            'springgreen',
                            'springgreen',
                            'springgreen',
                            'springgreen'
                        ]
                    }
                ]
            }
        }
    }

static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right'
}

    render(){
        return (
            <div className="chart">
                <Bar
                data={this.state.chartData}
                // width={100}
                // height={50}
                options={{
title:{
    display:this.props.displayTitle,
    text:'Largest Cities In Massachusetts',
    fontSize:25
    },
    legend:{
        display:this.props.displayLegend,
        position:this.props.legendPosition
    }
                }}
            />
            </div>
        )
    }
}

export default Chart;