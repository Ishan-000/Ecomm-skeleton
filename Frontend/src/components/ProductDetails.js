import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(state => state.products.productDetails);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product._id));
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error}</div>;
  if (!product) return null;

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded" />
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="font-bold mb-2">Price: ${product.price}</p>
      <p className="mb-2">Category: {product.category}</p>
      <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;