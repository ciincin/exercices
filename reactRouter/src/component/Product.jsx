import { Link, useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  return (
    <div>
      <h3>Product {id}</h3>
      <Link to="/products">Back</Link>
    </div>
  );
}

export default Product;
