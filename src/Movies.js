import React, { useState } from "react";
import axios from "axios";
import FilterForm from "./filterform";
import Movies from "./MoviesTable";
const baseURL = "http://localhost:8599/Diagnosis";

const Movies = () => {
  const [movie, setMovies] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [inputValueFirstName, setInputValueFirstName] = useState("");
  const [inputValueLastName, setInputValueLastName] = useState("");
  const [ setSortConfig] = useState({
    key: "",
    direction: "",
  });

  const handleInputChangeFirstName = (event) => {
    setInputValueFirstName(event.target.value);
  };

  const handleInputChangeLastName = (event) => {
    setInputValueLastName(event.target.value);
  };


  const handleFilterSubmit = (event) => {
    event.preventDefault();

    axios
      .get(baseURL, {
        params: {
          firstName: inputValueFirstName,
          lastName: inputValueLastName,
   
        },
      })
      .then((response) => {
        setMovies(response.data);
        setShowTable(true);
        setSortConfig({ key: "", direction: "" });
      })
      .catch((error) => {
        console.log(error);
        setShowTable(false);
      });
  };

  return (
    <div>
      <h1>Movies</h1>
      <FilterForm
        onFilterSubmit={handleFilterSubmit}
        inputValueFirstName={inputValueFirstName}
        onInputChangeFirstName={handleInputChangeFirstName}
        inputValueLastName={inputValueLastName}
        onInputChangeLastName={handleInputChangeLastName}

      />
      {showTable && <MoviesTable movie={movie} setSortConfig={setSortConfig} />}
    </div>
  );
};

export default Movies;