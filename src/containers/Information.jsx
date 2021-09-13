/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AppContext from '../hooks/Context/AppContext';

import '../styles/components/Information.css';

const Information = (props) => {
  console.log('Information');

  const { state, addToBuyer } = useContext(AppContext);

  const form = useRef(null);

  const { cart } = state;

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      state: formData.get('state'),
      city: formData.get('city'),
      country: formData.get('country'),
      cp: formData.get('cp'),
    };

    // formData.forEach((value, key) => {
    //   buyer[key] = value;
    // });

    console.log(buyer);
    history.push('/checkout/payment');

    addToBuyer(buyer);
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <label htmlFor="name">
              Full Name
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                id="name"
              />
            </label>
            <label htmlFor="email">
              Email
              <input type="text" placeholder="Email" name="email" id="email" />
            </label>
            <label htmlFor="address">
              Address
              <input
                type="text"
                placeholder="Address"
                name="address"
                id="address"
              />
            </label>
            <label htmlFor="apto">
              APT
              <input type="text" placeholder="APT" name="apto" id="apto" />
            </label>
            <label htmlFor="country">
              Country
              <input
                type="text"
                placeholder="Country"
                name="country"
                id="country"
              />
            </label>
            <label htmlFor="state">
              State
              <input type="text" placeholder="State" name="state" id="state" />
            </label>
            <label htmlFor="city">
              City
              <input type="text" placeholder="City" name="city" id="city" />
            </label>
            <label htmlFor="cp">
              Postal Code
              <input type="text" placeholder="Postal Code" name="cp" id="cp" />
            </label>
            <label htmlFor="phone">
              Phone
              <input type="text" placeholder="Prone" name="phone" id="phone" />
            </label>
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <button type="button">Regresar</button>
          </div>
          <div className="Information-next">
            <button onClick={handleSubmit} type="button">
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
