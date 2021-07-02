import React from 'react';

function Product({ product }) {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} title={product.title} />

      <h2>
        {product.title}
        <span>$ {product.price}</span>
      </h2>

      <p>{product.description}</p>

      <button type="button">Comprar</button>
    </div>
  );
}

export default Product;
