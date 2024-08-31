import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, searchProducts } from '../redux/actions/productActions';



const ProductList = () => {
    const dispatch = useDispatch();

    const { products, loading, error, currentPage, totalPages } = useSelector(state => state.products);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
        dispatch(fetchProducts(currentPage));
      }, [dispatch, currentPage]);
  
    const handleSearch = (e) => {
      e.preventDefault();
      dispatch(searchProducts(searchTerm));
    };
  
    const handlePageChange = (newPage) => {
      dispatch(fetchProducts(newPage));
    };
  
    if (loading) return <div className="text-center mt-8">Loading...</div>;
    if (error) return <div className="text-center mt-8 text-red-500">Error: {error}</div>;
  
    return (
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <form onSubmit={handleSearch} className="mb-4">
          <input 
            type="text" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 mr-2"
            placeholder="Search products..."
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products && products.length > 0 ? (
            products.map(product => (
              <div key={product._id} className="border p-4 rounded">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
                <Link to={`/product/${product._id}`} className="text-blue-500 hover:underline">View Details</Link>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
            <div className="mt-4 flex justify-center">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`mx-1 px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : ''}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
      </div>
    );
  };
  export default ProductList;