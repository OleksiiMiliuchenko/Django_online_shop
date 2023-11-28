import React, {useEffect, useState} from 'react';
import ProductsService from '../services/ProductsService';
import useProducts from "../hooks/useProducts";

const labels = ["Name", "Description", "Quantity", "Price", "Actions"]
const ProductListItem = ({product, handleDelete}) => {
    const {id, name, description, quantity, price} = product;

    return <tr key={id}>
        <td><a href={'/products/' + id}>{name}</a></td>
        <td>{description}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>
            <button onClick={() => handleDelete(id)}> Delete</button>
            <a href={`/products/${id}/edit`}> Update</a>
        </td>
    </tr>

};

const ProductList = () => {
    const {response} = useProducts(ProductsService.getProducts) 
    const [products, setProducts] = useState(response)

    useEffect(() => {
        setProducts(response)
    }, [response]);

    const handleDelete = async (id) => {
        try {
            await ProductsService.deleteProduct({id})
            const newArr = products.filter((obj) =>
                obj.id !== id
            );
            setProducts(newArr);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h2><a href="/products/create">Create</a></h2>
            <table>
                <thead key="thead">
                <tr>
                {
                    labels.map((label, idx) =>
                    <th key={idx}> {label} </th>)
                }
                </tr>
                </thead>
                <tbody>
                {
                    products.map((product) =>
                    <ProductListItem product={product} handleDelete={() => handleDelete(product.id)}/>)
                }
                </tbody>
            </table>
        </div>
    )
};

export default ProductList;
