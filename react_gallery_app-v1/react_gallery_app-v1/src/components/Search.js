import React, { Component } from 'react';

class Search extends Component {

    state = {
      searchData: ''
    }

    handleSearch = (e) => {
      // searchData = input value
      this.setState({searchData: e.target.value});
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSearch(this.query.value);
      e.currentTarget.reset();
    }

    render(){
      return (
        <form className="search-form" onSubmit={ this.handleSubmit }>
          <input
            type="search"
            name="search"
            onChange={this.handleSearch}
            ref={(input) => this.query = input}
            placeholder="Search here." required
          />
          <button type="submit" className="search-button">
            <p className="searchMe"> Search </p>
          </button>
        </form>
      )
    }//end render
}

export default Search;
