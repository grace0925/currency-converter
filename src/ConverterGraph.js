import React from 'react'
//exchange rate api 
//https://exchangeratesapi.io/

class ConverterGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date
        }
    }

    render() {
        return(
            <h1>Converter Graph Content</h1>
        )
    }
}

export default ConverterGraph