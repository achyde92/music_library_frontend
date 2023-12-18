import React, { useState } from "react";
import TextField from "../TextField/TextField";
import SearchBar from "./SearchBar";

const SearchBarForm = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
      onSearchChange(searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex item">
      <h4>Search</h4>
      <div className="p-2">
        <TextField label="Search" value={searchTerm} onChange={handleInputChange} />
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBarForm;