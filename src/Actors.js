import React, { useState } from "react";
import axios from "axios";
import FilterForm from "./filterform";
import ActorsTable from "./ActorsTable";
const baseURL = "http://localhost:7176/ChipsMovie/actors";

const Actors = () => {
  const [actor, setActor] = useState(null);
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
        setActor(response.data);
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
      <h1>Actors</h1>
      <FilterForm
        onFilterSubmit={handleFilterSubmit}
        inputValueFirstName={inputValueFirstName}
        onInputChangeFirstName={handleInputChangeFirstName}
        inputValueLastName={inputValueLastName}
        onInputChangeLastName={handleInputChangeLastName}

      />
      {showTable && <ActorsTable actor={actor} setSortConfig={setSortConfig} />}
    </div>
  );
};

export default Actors;