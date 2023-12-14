import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductsService from "../services/ProductsService";

const ViewProduct = () => {
  const { id } = useParams();
  const { response, loading } = useProducts(ProductsService.getProduct, id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (!loading && product) {
      setProduct(response);
    }
  }, [loading, product]);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
    </div>
  );
};

export default ViewProduct;
