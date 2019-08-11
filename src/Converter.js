import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ConverterContent from './ConverterContent';
import ConverterGraph from './ConverterGraph';
//exchange rate api 
//https://exchangeratesapi.io/
// TODO: add tooltips to options
// TODO: rounding 
// TODO: better layouts
// TODO: currency change diagrams 

class Converter extends Component {

    constructor() {
        super();
        var today = new Date()
        let day = today.getFullYear() + '-' + (today.getMonth() + 1 )+ '-' + today.getDate();
        console.log('day =>', day )
        this.state = {
            date: day
        }
    }
    render() {

        return(
            <div className="row">
                <Card className="classes.Name col-6 mx-auto mt-4">
                    <CardHeader 
                        title= "Currency Converter"
                        subheader="Free live exchange calculator"
                    />
                    <div className="row">
                        <div className="col-8">
                            <ConverterContent date={this.state.date}/>
                        </div>
                        <div className="col-4">
                            <ConverterGraph date={this.state.date}/>
                        </div>
                    </div>
                    
                </Card>
            </div>
            
        )
    }
}

export default Converter