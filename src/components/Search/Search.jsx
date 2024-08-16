import React from 'react';
import style from './search.module.css'; 
import { FaSearch } from 'react-icons/fa'; 

const Search = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    const query = event.target.elements.search.value; 
    console.log(query); 
  };

  return (
    <form className={style.searchContainer} onSubmit={handleSubmit}>
      <input 
        className={style.searchInput} 
        placeholder="Search your Burger" 
        type="text" 
        name="search" 
      />
      <button type="submit" className={style.searchButton}>
        <FaSearch className={style.searchIcon} />
      </button>
    </form>
  );
};

export default Search;
