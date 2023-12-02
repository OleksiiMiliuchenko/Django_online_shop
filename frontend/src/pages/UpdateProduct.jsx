import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductsService from "../services/ProductsService";
import ProductsInputForm from "../components/ProductsInputForm";

const UpdateProduct = () => {
  const { id } = useParams();
  const { response } = useProducts(ProductsService.getProduct, id);

  return (
    <div>
      <ProductsInputForm
        title={"Update product"}
        method={ProductsService.updateProduct}
        initialData={response}
      />
    </div>
  );
};

export default UpdateProduct;
