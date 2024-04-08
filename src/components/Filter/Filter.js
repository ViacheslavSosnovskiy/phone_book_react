const Filter = ({ filter, handleFilterChange }) => {
  return (
    <>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        required
      />
    </>
  );
};

export default Filter;
