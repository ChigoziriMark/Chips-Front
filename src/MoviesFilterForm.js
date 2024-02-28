import React from "react";
import styles from "./FilterForm.module.css";

const MoviesFilterForm = ({
  onFilterSubmit,
  inputValueTitle,
  onInputChangeTitle,
  inputValueGenre,
  onInputChangeGenre,


}) => {
  return (
    <div className={styles["filter-box"]}>
      <form onSubmit={onFilterSubmit} className={styles["filter-form"]}>
        <div className={styles["filter-item"]}>
          <label htmlFor="title" data-description="Title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={inputValueTitle}
            onChange={onInputChangeTitle}
            required
          />
        </div>
        <div className={styles["filter-item"]}>
          <label htmlFor="genre" data-description="Genre">
            Genre
          </label>
          <input
            type="text"
            id="genre"
            value={inputValueGenre}
            onChange={onInputChangeGenre}
          />
        </div>
        <button
          type="submit"
          className={`${styles["filter-button"]} ${styles["submit-button"]}`}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default MoviesFilterForm;