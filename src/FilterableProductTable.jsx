import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";
const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={(val) => setFilterText(val)}
        onInStockOnly={(val) => setInStockOnly(val)}
      />
      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={products}
      />
    </>
  );
};

export default FilterableProductTable;
