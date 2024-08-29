import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../State/Admin_Products/Action';
import '../../Styles/Create_Product.css';
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
const Create_Product = () => {
  const navigate = useNavigate()
  const [productData, setProductData] = useState({
    title: "",
    brand: "",
    image: "",
    price: "",
    discountedPrice: "",
    discountPersent: "",
    quantity: "",
    category: "",
    description: "",
  });

  const categories = [
    { id: 1, name: "Fries" },
    { id: 2, name: "Biryani" },
    { id: 3, name: "Burger" },
    { id: 4, name: "Meggi" },
    { id: 5, name: "Momos" },
    { id: 6, name: "Pizza" },
    { id: 7, name: "Chicken" },
    { id: 8, name: "Sandwich" },
    { id: 9, name: "Pasta" },
    { id: 10, name: "Panner" },
  ];

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCategoryChange = (categoryName) => {
    setProductData((prevState) => ({
      ...prevState,
      category: categoryName,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productData.title || !productData.price || !productData.category) {
      toast.error('Title, Price, and Category are required!');
      return;
    }

    dispatch(createProduct(productData))
      .then(() => {
        toast.success('Product created successfully!');
        navigate('/')
      })
      .catch((error) => {
        console.error('Creation failed:', error);
        toast.error('Failed to create the product');
      });
  };

  return (
    <div className="product-form">
      <h5>Add New Product</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" value={productData.title} onChange={handleChange} className="form-control" placeholder='Product title' />
          </div>
          <div className="form-group">
            <label>Brand</label>
            <input type="text" name="brand" value={productData.brand} onChange={handleChange} className="form-control" placeholder='Product brand' />
          </div>
          <div className="form-group">
            <label>Image Url</label>
            <input type="text" name="image" value={productData.image} onChange={handleChange} className="form-control" placeholder='Product image url' />
          </div>
        </div>
        <div className="form-fields">
          <div className="form-group">
            <label>Quantity</label>
            <input type="number" name="quantity" value={productData.quantity} onChange={handleChange} className="form-control" placeholder='Product quantity' />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input type="number" name="price" value={productData.price} onChange={handleChange} className="form-control" placeholder='Product price' />
          </div>
          <div className="form-group">
            <label>Discounted Price</label>
            <input type="number" name="discountedPrice" value={productData.discountedPrice} onChange={handleChange} className="form-control" placeholder='Product discounted price' />
          </div>
        </div>
        <div className="form-fields">
          <div className="form-group">
            <label>Discount Percent</label>
            <input type="number" name="discountPersent" value={productData.discountPersent} onChange={handleChange} className="form-control" placeholder='Product discount' />
          </div>
          <div className="form-group">
            <label>Category</label>
            <div className="custom-dropdown">
              <button type="button" className="dropdown-button">
                {productData.category || "Select Category"}
              </button>
              <div className="dropdown-content">
                {categories.map((category) => (
                  <div key={category.id} className="dropdown-item" onClick={() => handleCategoryChange(category.name)}>
                    {category.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="form-fields">
          <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={productData.description} onChange={handleChange} className="form-control pt" placeholder='Product description' />
          </div>
        </div>
        <button type="submit" className="submit-button">
          Add New Product
        </button>
      </form>
    </div>
  );
};

export default Create_Product;


