import React, { useState, useRef } from "react";

export default function Search({ onSearch }) {
    const [data, setData] = useState('');
    const ref = useRef(null);

    // input value = search data
    const handleSearch = (e) => {
      setData(e.target.value);
    }
    // to show matches, have to refresh page often.....
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(ref.current.value);
    }

    return (
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="search"
          name="search"
          onChange={handleSearch}
          ref={ref}
          placeholder="Looking for something?"
          required
        />
        <button type="submit" className="search-button">
          <p className="search-text">Search</p>
        </button>
      </form>
    )
}