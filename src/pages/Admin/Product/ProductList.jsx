import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ProductList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios
        .get('http://localhost:3000/products')
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>Product</h1>
        <ul>
          {data.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
 }
 
 export default ProductList;
