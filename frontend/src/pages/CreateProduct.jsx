import ProductsInputForm from "../components/ProductsInputForm";
import ProductsService from "../services/ProductsService";

const CreateProduct = () => {
  return (
    <div>
      <ProductsInputForm
        title={"Create new product"}
        method={ProductsService.createProduct}
        initialData={{}}
      />
    </div>
  );
};

export default CreateProduct;
