import {useEffect, useState} from "react";
import ProductsService from "../services/ProductsService";

const ProductsInputForm = ({ method, onSubmit, initialData }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if(initialData){
            setFormData(initialData)
        }
    }, [initialData]);

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormData(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        if (method === "Update") {
            ProductsService.updateProduct({id: initialData.id, ...formData, user_id: 1, category_id: 1});
        } else if (method === "Create") {
            ProductsService.createProduct({...formData, user_id: 1, category_id: 1})
        }
    }

    return (
        <div>
            <a href="/">Home</a>
            <h1> {method} </h1>
            <form onSubmit={onSubmit}>
                <label>name: </label><br/>
                <input
                    id="name" name="name" value={formData.name || ''} onChange={handleChange} required
                /><br/><br/>
                <label>description: </label><br/>
                <input
                    id="description" name="description" value={formData.description || ''} onChange={handleChange}
                /><br/><br/>
                <label>quantity: </label><br/>
                <input
                    type="number" id="quantity" name="quantity" value={formData.quantity || ''} onChange={handleChange}
                /><br/><br/>
                <label>price: </label><br/>
                <input
                    type="number" id="price" name="price" value={formData.price || ''} onChange={handleChange} required
                /><br/><br/>

                <input type="submit"/>
            </form>
        </div>
    )
}

export default ProductsInputForm;
