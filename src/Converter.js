import React, { Component } from 'react'
import {MdSwapVert} from 'react-icons/md'

class Converter extends Component {
    state={
        currencies: ['USD', 'CAD', 'AUD', 'YEN', 'EUR', 'CNH', 'HKD'],
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
    }
    render() {
        const {currencies, baseCurr, baseAmount, resultCurr, resultAmount, date} = this.state
        return(
            <div className="row">
                <div className="card card-body col-6 mx-auto mt-4">
                    <h5>On {date}</h5>
                    <h6>1 {baseCurr} is equivalent to {resultAmount} {resultCurr}</h6>
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <form className="form-inline mt-3 mb-4 mx-auto">
                                <div className="form-group">
                                    <input className="form-control mx-3"></input>
                                    <select name="baseCurr" value={baseCurr} className="form-control"
                                            onChange={this.handleSelect}>
                                        {currencies.map(currency => 
                                            <option key={currency} value={currency}>{currency}</option>
                                        )}
                                    </select>
                                </div>
                            </form>
                            <form className="form-inline mb-4">
                                <div className="form-group">
                                    <input className="form-control mx-3"></input>
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
                            <MdSwapVert size="45"/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Converter