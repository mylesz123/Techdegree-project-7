import React, { useState } from "react";

export default function Search({ onSearch, location }) {
    const [input, setInput] = useState('');

    const onChange = (e) => {
      setInput(e.target.value);
    }

    // to show matches, have to refresh page often..
    const handleSubmit = (e) => {
      e.preventDefault();
      const stateKey = location.pathname.substr(1);
      onSearch(input, stateKey);
    }

    return (
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="search"
          name="search"
          onChange={onChange}
          placeholder="Looking for something?"
          required
        />
        <button type="submit" className="search-button">
          <p className="search-text">Search</p>
        </button>
      </form>
    )
}