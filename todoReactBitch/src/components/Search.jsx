import React from 'react';

const Search = ({ search, handleSearch }) => {
  const handleChange = (event) => {
    handleSearch(event);
  };

  return (
    <>
      {search && <p>Søker etter org.nr: {search}</p>}
      <form id="search">
        <label htmlFor="search">Søk: </label>
        <input
          type="text"
          id="search"
          placeholder="org.nr"
          onChange={handleChange}
          value={search}
        />
      </form>
    </>
  );
};

export default Search;
