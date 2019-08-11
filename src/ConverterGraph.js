import React, {PureComponent} from 'react'
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  } from 'recharts';
//exchange rate api 
//https://exchangeratesapi.io/

class ConverterGraph extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date,
            graphData: [
                {
                    dateValue:'06-01',
                    rate: 4.5,
                },
                {
                    dateValue: '06-02',
                    rate: 3.0
                },
                {
                    dateValue: '06-03',
                    rate: 3.6,
                },
                {
                    dateValue: '06-04',
                    rate: 5.1,
                },
                {
                    dateValue: '06-05',
                    rate: 4.6,
                },
                {
                    dateValue: '06-06',
                    rate: 4.8,
                },
                {
                    dateValue: '06-07',
                    rate: 5.0,
                },
            ],
        }
        this.handleGraphData();
    }

    handleGraphData() {
        console.log("handling graph data")
        fetch(`https://api.exchangeratesapi.io/history?start_at=2019-08-04&end_at=2019-08-11&base=USD&symbols=CAD`)
        .then(response => console.log(response.json()))
        .then(data => {
            console.log('hi')
        })
    }

    render() {
        return(
            <div className="row" >
                <div className="col">
                    <AreaChart 
                        width={270}
                        height={150}
                        data={this.state.graphData}
                        margin={{
                            top: 10, right: 30, left: 0, bottom: 0,
                        }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="dateValue" />
                        <YAxis dataKey="rate"/>
                        <Tooltip />
                        <Area type="monotone" dataKey="rate" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="dateValue" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </div>
            </div>
        )
    }
}

export default ConverterGraph