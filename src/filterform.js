import React from "react";
import styles from "./FilterForm.module.css";

const FilterForm = ({
  onFilterSubmit,
  inputValueFirstName,
  onInputChangeFirstName,
  inputValueLastName,
  onInputChangeLastName,


}) => {
  return (
    <div className={styles["filter-box"]}>
      <form onSubmit={onFilterSubmit} className={styles["filter-form"]}>
        <div className={styles["filter-item"]}>
          <label htmlFor="firstName" data-description="First Name">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={inputValueFirstName}
            onChange={onInputChangeFirstName}
            required
          />
        </div>
        <div className={styles["filter-item"]}>
          <label htmlFor="lastName" data-description="Last Name">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={inputValueLastName}
            onChange={onInputChangeLastName}
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

export default FilterForm;