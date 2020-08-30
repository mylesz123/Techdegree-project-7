import React, { Component } from "react";
//this component has state, needs to be memorized
class Search extends Component {

    state = {
      data: ""
    }
    // input value = search data
    handleSearch = (e) => {
      this.setState({data: e.target.value});
    }
    // to show matches, have to refresh page often.....
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSearch(this.query.value);
    }

    render () {
      return (
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input type="search"
            name="search"
            onChange={this.handleSearch}
            ref={(input) => this.query = input}
            placeholder="Looking for something?"
            required
          />
          <button type="submit" className="search-button">
            <p className="search-text">Search</p>
          </button>
        </form>
      )
    }
}
export default Search;
