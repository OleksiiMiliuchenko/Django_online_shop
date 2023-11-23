import ProductsInputForm from "../components/ProductsInputForm";

const CreateProduct = () => {
    return (
        <div>
            <ProductsInputForm method={"Create"} initialData={{
                id: "",
                name: "",
                description: "",
                quantity: "",
                price: "",
            }}/>
        </div>
    );
}

export default CreateProduct;
