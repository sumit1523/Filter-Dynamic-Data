import React, { Component } from 'react';
import Cars from './Cars';
class Transpo extends Component {
    state = {
        type: 'All',
        isNew: false
    }

    handleChange = (event) => {
        this.setState({ type: event.target.value })
    }

    handleCheckChange = () => {
        this.setState({ isNew: !this.state.isNew })
    }

    render() {
        const {type,isNew} = this.state;
        let carList = [
            {
                "type": "Cars",
                "list": [
                    {
                        "year": 2013,
                        "model": "A",
                        "price": 32000
                    },
                    {
                        "year": 2011,
                        "model": "B",
                        "price": 4400
                    },
                    {
                        "year": 2016,
                        "model": "B",
                        "price": 15500
                    }
                ]
            },
            {
                "type": "Trucks",
                "list": [
                    {
                        "year": 2014,
                        "model": "D",
                        "price": 18000
                    },
                    {
                        "year": 2013,
                        "model": "E",
                        "price": 5200
                    }
                ]
            },
            {
                "type": "Convertibles",
                "list": [
                    {
                        "year": 2009,
                        "model": "F",
                        "price": 2000
                    },
                    {
                        "year": 2010,
                        "model": "G",
                        "price": 6000
                    },
                    {
                        "year": 2012,
                        "model": "H",
                        "price": 12500
                    },
                    {
                        "year": 2017,
                        "model": "M",
                        "price": 50000
                    }
                ]
            }
        ]
        let sections = []
        for (let cars of carList) {
            if (type === "All" || type === cars.type) {
                sections = sections.concat(<Cars
                    type={cars.type}
                    list={cars.list}
                    isNew={isNew} />
                )
            }
        }

        return (
            <div className="transpo">
                <h2 className="title">Welcome to React Transportation</h2>
                <p className="subtitle">The best place to buy vehicles online.</p><br />
                <h4 className="title is-4">Choose Options</h4>
                <div className="field">
                    <div className="control">
                        <label className="checkbox" title="Within the last 5 years">
                            <input type="checkbox" onChange={this.handleCheckChange} />
                            &nbsp;New Only
              </label>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Select Type</label>
                    <div className="control">
                        <div className="select is-rounded">
                            <select value={this.state.type} onChange={this.handleChange}>
                                <option value="All" selected>All</option>
                                <option value="Cars">Cars</option>
                                <option value="Trucks">Trucks</option>
                                <option value="Convertibles">Convertibles</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br />
                {sections.map(section => section)}
            </div>
        )
    }
}
export default Transpo;