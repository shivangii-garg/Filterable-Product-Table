import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import "./productTable.css";
const ProductTable = ({ products, filterText, inStockOnly }) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((prod) => {
    if (prod.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !prod.stocked) {
      return;
    }
    if (prod.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={prod.category} />);
    }
    rows.push(<ProductRow product={prod} />);
    lastCategory = prod.category;
  });
  return (
    <div className="productTable">
      <table>
        <thead>
          <tr>
            <th style={{ padding: "10px 50px" }}>Name</th>
            <th style={{ padding: "10px 50px" }}>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default ProductTable;
