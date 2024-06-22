import styles from "./Filter.module.scss";
import propTypes from "prop-types";

export default function Filter({ filter, onFilterChange }) {
  return (
    <div className={styles.filterContainer}>
      <label className={styles.label}>Find contacts by name</label>
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
}

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  onFilterChange: propTypes.func.isRequired,
};
