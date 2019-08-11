import React, { Component } from 'react'
import {MdSwapVert} from 'react-icons/md'
import { render } from 'react-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Flag from 'react-flagkit';
import IosRefresh from 'react-ionicons/lib/IosRefresh'
//exchange rate api 
//https://exchangeratesapi.io/
// TODO: add tooltips to options
// TODO: rounding 
// TODO: better layouts

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    }
}))

class Converter extends Component {

    render() {

        return(
            <div className="row">
                <Card className="classes.Name col-6 mx-auto mt-4">
                    <CardHeader 
                        title= "Currency Converter"
                        subheader="Free live exchange calculator"
                    />
                    <ConverterContent />
                    
                </Card>
            </div>
            
        )
    }
}

class ConverterContent extends Component {
    state={
        currencies: ['USD', 'CAD', 'JPY', 'BGN', 'CZK', 'DKK', 'GBP', 'HUF', 'PLN', 'RON', 'SEK', 'CNY', 'HKD', 'KRW', 'INR', 'SGD'],
        baseCurr: 'CAD',
        baseAmount: '',
        resultCurr: 'USD',
        resultAmount: '',
        date: '',
        done: true,
    }
    handleSelect = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.calcResult()
    }
    handleInput = (e) => {
        console.log("handle input ")
        this.setState({
            baseAmount: e.target.value
        })
        this.calcResult()
    }
    handleSwap = (e) => {
        const baseCurr = this.state.baseCurr
        const resultCurr = this.state.resultCurr
        const resultAmount = this.state.resultAmount
        const done = false
        e.preventDefault()
        this.setState({
            baseCurr: resultCurr,
            resultCurr: baseCurr,
            baseAmount: resultAmount,
            resultAmount: '',
        })
        process.nextTick(() => {
            this.calcResult()
        })
    }
    calcResult = () => {
        const result = this.state.baseAmount
        if (result === isNaN) {
            return
        } else {
            fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.baseCurr}`)
            .then(response => response.json())
            .then(data => {
                const date = data.date
                const resultAmount = (data.rates[this.state.resultCurr] * this.state.baseAmount).toFixed(2)
                const done = true;
                this.setState({
                    date, resultAmount, done
                })
            })
        }
    }
    render() {
        const {currencies, baseCurr, baseAmount, resultCurr, resultAmount, date, done} = this.state
        return (
            <div>
                {done ? (
                <CardContent>
                    <h5>On {date}</h5>
                    <h4>{baseAmount} {baseCurr} is equivalent to {resultAmount} {resultCurr}</h4>
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <form className="form-inline mt-3 mb-4 mx-auto">
                                <div className="form-group">
                                    <input type="number" value={baseAmount} step="0.01" min="0.00" placeholder="1.00" className="form-control mx-3" 
                                            onChange={this.handleInput}>
                                    </input>
                                    <select name="baseCurr" value={baseCurr} className="form-control"
                                            onChange={this.handleSelect}>
                                        {currencies.map(currency => 
                                            <option key={currency} value={currency.substring(0,3)}>{currency}</option>
                                        )}
                                    </select>
                                </div>
                            </form>
                            <form className="form-inline mb-4">
                                <div className="form-group">
                                    <input disabled={true} value={resultAmount} className="form-control mx-3"></input>
                                    <select name="resultCurr" value={resultCurr} className="form-control"
                                            onChange={this.handleSelect}>
                                        {currencies.map(currency => 
                                            <option key={currency} value={currency}>{currency}</option>    
                                        )}
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-2 ml-5 align-self-center mb-2">
                            <div className="row mb-1">
                                <Flag country={this.state.baseCurr.substring(0,2)}/>
                            </div>
                            <div className="row">
                                <MdSwapVert onClick={this.handleSwap} size="35"/>
                            </div>
                            <div className="row">
                                <Flag country={this.state.resultCurr.substring(0,2)}/>
                            </div>
                        </div>
                    </div>
                </CardContent>) 
            : (<IosRefresh fontSize="60px" color="#347eff" rotate={true} />)}
            </div>
        ) 
    }
}
export default Converter