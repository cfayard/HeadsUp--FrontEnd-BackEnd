import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2'

// let totalExpenses = this.state.chartData.data[0]+this.state.chartData.data[1]+this.state.chartData.data[2]+this.state.chartData.data[3]+this.state.chartData.data[4]+this.state.chartData.data[5]+this.state.chartData.data[6]

let totalExpenses = 1200 + 200 + 200 + 250 + 500 + 300 + 20

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
                            1200,
                            200,
                            200,
                            250,
                            500,
                            300,
                            20
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
                text:'Visual Expense Report',
                fontSize:20
            },
            legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
        }
                }}
            />
            <p style={{
                color: 'red',
                fontSize:20
            }}>Total Expenses: <p style={{
                fontSize:18,
                color:'yellow'
            }}> $ {totalExpenses}</p></p>
            </div>
        )
    }
}


export default Chart;