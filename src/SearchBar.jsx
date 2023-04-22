const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnly
}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <br />
      <input
        type="checkbox"
        value={inStockOnly}
        onChange={() => onInStockOnly(!inStockOnly)}
      />
      <label>Only Show Products in stock </label>
    </>
  );
};

export default SearchBar;
