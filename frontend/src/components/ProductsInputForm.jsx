import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductsInputForm = ({ title, method, initialData }) => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    method({ ...formData, user_id: 1, category_id: 1 });

    navigate("/");
  };

  return (
    <div>
      <a href="/">Home</a>
      <h1> {title} </h1>
      <form onSubmit={onSubmit}>
        <label>name: </label>
        <br />
        <input
          id="name"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label>description: </label>
        <br />
        <input
          id="description"
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>quantity: </label>
        <br />
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity || ""}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label>price: </label>
        <br />
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price || ""}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default ProductsInputForm;
