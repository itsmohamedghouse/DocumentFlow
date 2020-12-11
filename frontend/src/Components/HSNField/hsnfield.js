import React from 'react';

//import Autosuggest from 'react-autosuggest';

//import './autosuggest.css';




/////////////////////////////////////////////////////////////////

export default class Hsnfield extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            suggestions: [],
            text: '',
        };
    }

    // componentDidMount() {
    //     fetch('http://localhost:9000/trade')
    //         .then((res) => res.json())
    //         .then((items) => {
    //             this.setState({ items }, () => console.log('HSN Fetched', items));
    //         });
    // }

    onTextChanged = (e) => {
        //const { items } = this.props;
        let items = this.state.items
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, text: value }));

    }

    suggestionSelected(value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item.Country}</li>)}
            </ul>
        );
    }

    render() {
        //let items = this.state.items
        const { text } = this.state;
        return (
            <>
                <div className="Autotextfield">
                    <input className="textfieldbox" placeholder="Enter HSN Code here" value={text} onChange={this.onTextChanged} type="text" />
                    {this.renderSuggestions()}
                </div>
            </>
        )
    }
}