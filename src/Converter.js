import React, { Component } from 'react'
import {MdSwapVert} from 'react-icons/md'
//exchange rate api 
//https://exchangeratesapi.io/



class Converter extends Component {
    state={
        currencies: ['USD', 'CAD', 'JPY', 'BGN', 'CZK', 'DKK', 'GBP', 'HUF', 'PLN', 'RON', 'SEK', 'CNY', 'HKD', 'KRW', 'INR', 'SGD'],
        baseCurr: 'CAD',
        baseAmount: '',
        resultCurr: 'USD',
        resultAmount: '',
        date: '',
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
    // TODO: migrate to material ui
    // TODO: add tooltips to options
    // TODO: emoji
    calcResult = () => {
        const result = this.state.baseAmount
        if (result === isNaN) {
            return
        } else {
            fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.baseCurr}`)
            .then(response => response.json())
            .then(data => {
                const date = data.date
                console.log("result curr => ", this.state.resultCurr)
                console.log("base amount => ", this.state.baseAmount)
                const resultAmount = (data.rates[this.state.resultCurr] * this.state.baseAmount).toFixed(2)
                this.setState({
                    date, resultAmount
                })
            })
        }
    }
    render() {
        const {currencies, baseCurr, baseAmount, resultCurr, resultAmount, date} = this.state
        return(
            <div className="row">
                <div className="card card-body col-6 mx-auto mt-4">
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
                        <div className="col-lg-2 ml-3 align-self-center">
                            <MdSwapVert onClick={this.handleSwap} size="45"/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Converter