import React, { Component } from 'react'
import {MdSwapVert} from 'react-icons/md'

class Converter extends Component {
    render() {
        return(
            <div className="card card-body">
                <h5>1 CAD is equivalent to</h5>
                <div className="row justify-content-center">
                    <div className="col-3 ml-5">
                        <form className="form-inline mt-3 mb-4 mx-auto">
                            <div className="form-group">
                                <input className="form-control mx-3"></input>
                                <select className="form-control">
                                    <option>Option 1</option>
                                </select>
                            </div>
                        </form>
                        <form className="form-inline mb-4">
                            <div className="form-group">
                                <input className="form-control mx-3"></input>
                                <select className="form-control">
                                    <option>Option 1</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="col-1 align-self-center">
                        <MdSwapVert size="45"/>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Converter