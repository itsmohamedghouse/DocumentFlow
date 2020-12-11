import React from 'react';
import Countryfield from './Components/CountryField/countryfield';
import HSNfield from './Components/HSNField/hsnfield';
import './index.css';
import countries from './Components/CountryField/countries';


export default class App extends React.Component {

    constructor() {
        super()
        this.state = {
            hsn : [],
            message: 'Enter Following Details'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thanks for Submission.'
        })
    }
    componentDidMount() {
        fetch("http://localhost:9000/trade")
        .then(res => res.json())
        .then(hsn => {
            this.setState({ hsn }, () => console.log('HSN Fetched', hsn))
    })
}

    render() {
        return (
            <>
                <div className="container">
                    <h1>{this.state.message}</h1>
                    <label>Import Country</label>
                    <Countryfield items={countries} /><br />
                    <label>Export Country</label>
                    <Countryfield items={countries} /><br />
                    <label>HSN No.</label>
                    <HSNfield /><br />
                    <button onClick={() => this.changeMessage()}>Submit</button>
                </div>
            </>
        );

    }
}