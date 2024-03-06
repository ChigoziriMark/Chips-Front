import React, { useState } from "react";
import axios from "axios";
import SeriesTable from "./SeriesTable";
import SeriesFilterForm from "./SeriesFilterForm";
const baseURL = "http://localhost:7176/ChipsMovie/series";

const Series = () => {
  const [series, setSeries] = useState(null);
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
          title :inputValueTitle,
          genre: inputValueGenre,
   
        },
      })
      .then((response) => {
        setSeries(response.data);
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
      <h1>Series</h1>
      <SeriesFilterForm
        onFilterSubmit={handleFilterSubmit}
        setInputValueTitle={inputValueTitle}
        onInputChangeTitle={handleInputChangeTitle}
        inputValueGenre={inputValueGenre}
        onInputChangeGenre={handleInputChangeGenre}
      />
      {showTable && <SeriesTable serie ={series} setSortConfig={setSortConfig} />}
    </div>
  );
};

export default Series;