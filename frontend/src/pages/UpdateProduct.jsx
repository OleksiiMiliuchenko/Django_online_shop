import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductsService from "../services/ProductsService";
import ProductsInputForm from "../components/ProductsInputForm";
import createProduct from "./CreateProduct";

const UpdateProduct = () => {
    const { id } = useParams()
    const {response, loading} = useProducts(ProductsService.getProduct, id)
    // const [product, setProduct] = useState(response)

    // useEffect(() => {
    //     if (response) {
    //         setProduct(response)
    //     }
    // }, [response]);

    const onSubmit=(data) => createProduct(data)

    return (
        <div>
            {/*<ProductsInputForm method="Update" initialData={{*/}
            {/*    id: id,*/}
            {/*    name: product.name,*/}
            {/*    description: product.description,*/}
            {/*    quantity: product.quantity,*/}
            {/*    price: product.price*/}
            {/*    // name: "1", description: "2", quantity: 3, price: 4*/}
            {/*}}/>*/}
            <ProductsInputForm onSubmit={onSubmit}  initialData={response}/>
        </div>
    );
}

export default UpdateProduct;
