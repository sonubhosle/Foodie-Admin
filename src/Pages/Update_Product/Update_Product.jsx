import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findProductsById, updateProduct } from '../../State/Admin_Products/Action';
import '../../Styles/Create_Product.css'
import {toast} from 'react-toastify'

const Update_Product = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = useSelector(state => state.products.product); // Access the product from Redux state
    const [formData, setFormData] = useState({
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

    // Fetch the product by ID when the component mounts
    useEffect(() => {
        dispatch(findProductsById({ productId: id }));
    }, [dispatch, id]);

    // Populate the form when the product data is fetched
    useEffect(() => {
        if (product) {
            setFormData({
                title: product.title || "",
                brand: product.brand || "",
                image: product.image || "",
                price: product.price || "",
                discountedPrice: product.discountedPrice || "",
                discountPersent: product.discountPersent || "",
                category: product.category || "",
                quantity: product.quantity || "",
                description: product.description || "",
            });
        }
    }, [product]);

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission to update the product
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct(id, formData))
            .then(() => {
                toast.success('Product updated successfully!'); // Show success toast
                navigate('/'); // Redirect to the homepage or products list after update
            })
            .catch(error => {
                console.error('Update failed:', error);
                toast.error('Failed to update the product'); // Show error toast
            });
    };

    return (
        <div className='product-form'>
            <h5>Update Product</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-fields">
                    <div className='form-group'>
                        <label>Title</label>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} className='form-control ' />
                    </div>
                    <div className='form-group'>
                        <label>Brand</label>
                        <input type="text" name="brand" value={formData.brand} onChange={handleChange}  className='form-control '/>
                    </div>
                    <div className='form-group'>
                        <label>Image URL</label>
                        <input type="text" name="image" value={formData.image} onChange={handleChange} className='form-control ' />
                    </div>
                </div>
                <div className='form-fields'>
                    <div className='form-group'>
                        <label>Price</label>
                        <input type="number" name="price"  value={formData.price}  onChange={handleChange} className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label>Discounted Price</label>
                        <input type="number" name="discountedPrice" value={formData.discountedPrice} onChange={handleChange} className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label>Discount Percent</label>
                        <input  type="number"  name="discountPersent"  value={formData.discountPersent}  onChange={handleChange} className='form-control ' />
                    </div>
                </div>
                <div className="form-fields">
                    <div className='form-group'>
                        <label>Quantity</label>
                        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} className='form-control ' />
                    </div>
                    <div className='form-group'>
                        <label>Category</label>
                        <input type="text" name="category" value={formData.category} onChange={handleChange} className='form-control ' />
                    </div>
                </div>
                <div className="form-fields">
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea name="description" value={formData.description}  onChange={handleChange} className='form-control pt'  ></textarea>
                    </div>
                </div>
                <button type="submit" className='submit-button'>Update Product</button>
            </form>
        </div>
    );
};

export default Update_Product;
