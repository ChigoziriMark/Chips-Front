import React, { useState } from "react";
import axios from "axios";
import MoviesFilterForm from "./MoviesFilterForm";
import MoviesTable from "./MoviesTable";
const baseURL = "http://localhost:8599/Diagnosis";

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [inputValueTitle, setInputValueTitle] = useState("");
  const [inputValueGenre, setInputValueGenre] = useState("");
  const [ setSortConfig] = useState({
    key: "",
    direction: "",
  });

  const handleInputChangeTitle = (event) => {
    setInputValueTitle(event.target.value);
  };

  const handleInputChangeGenre = (event) => {
    setInputValueGenre(event.target.value);
  };


  const handleFilterSubmit = (event) => {
    event.preventDefault();

    axios
      .get(baseURL, {
        params: {
          title: inputValueTitle,
          genre: inputValueGenre,
   
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
      <MoviesFilterForm
        onFilterSubmit={handleFilterSubmit}
        inputValueTitle={inputValueTitle}
        onInputChangeTitle={handleInputChangeTitle}
        inputValueGenre={inputValueGenre}
        onInputChangeGenre={handleInputChangeGenre}

      />
      {showTable && <MoviesTable movies={movies} setSortConfig={setSortConfig} />}
    </div>
  );
};

export default Movies;