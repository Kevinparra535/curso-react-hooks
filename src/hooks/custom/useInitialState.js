import { useState, useEffect } from 'react';
import axios from 'axios';

import initialState from '../../initialState';

const url = 'http://localhost:1337/products';

const useInitialState = () => {
  const [products, setProducts] = useState([]);

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setProducts(result.data);
    };

    fetchData();
  }, []);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    state,
    addToBuyer,
    products,
    addNewOrder,
  };
};

export default useInitialState;
