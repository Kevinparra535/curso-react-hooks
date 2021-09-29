/* eslint-disable no-multi-assign */
import React, { useContext } from 'react';
import AppContext from '../hooks/Context/AppContext';

import Product from './Product';

import '../styles/components/Products.css';

const Products = () => {
  const { products, addToCart } = useContext(AppContext);

  // Esta funcion maneja agregar productos a la cesta
  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
