import React, { Component } from 'react'

class Converter extends Component {
    render() {
        return(
            <div className="card card-body">
                <h5>1 CAD is equivalent to</h5>
                <form className="form-inline mt-3 mb-4 mx-auto">
                    <div className="form-group">
                        <input className="form-control mx-3"></input>
                        <select className="form-control">
                            <option>Option 1</option>
                        </select>
                    </div>
                </form>
                <form className="form-inline mb-4 mx-auto">
                    <div className="form-group">
                        <input className="form-control mx-3"></input>
                        <select className="form-control">
                            <option>Option 1</option>
                        </select>
                    </div>
                </form>
            </div>
            
        )
    }
}

export default Converter