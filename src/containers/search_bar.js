import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        // not sure what below does
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }
    
    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    // Prevents form from submitting 
    onFormSubmit(event) {
        event.preventDefault();

        // we need to go and fetch weather data
    }
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                placeholder="Get a five-day forecast in your favorite cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}