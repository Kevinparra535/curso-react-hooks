import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

import AppContext from '../hooks/Context/AppContext';

import '../styles/components/Payment.css';

const Payments = ({history}) => {
  const { state } = useContext(AppContext);
  const { cart, buyer, addNewOrder } = state;

  const paypalOptions = {
    clientId:
      'AcmVTMFuTNe1KDQk7jDs14ZpcM86ui0_rKqxDvinN_3jMGxPU8gFY9UKTw3bJgWaZirO3lDk1r07NScj',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    label: 'Pay with PayPal',
    height: '60px',
    color: 'blue',
    shape: 'rect',
    layout: 'vertical',
    tagline: false,
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        orderId: data.id,
        product: cart,
        buyer,
        payment: data,
      };
      addNewOrder(newOrder);
      console.log(newOrder);
      history.push('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido: </h3>
        {cart.map((product) => (
          <div className="Payment-item" key={product.title}>
            <div className="Payment-element">
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyle={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => {
              console.log('Payment started');
            }}
            onPaymentSuccess={(data) => {
              handlePaymentSuccess(data);
            }}
            onPaymentError={(err) => {
              console.log('Payment error', err);
            }}
            onPaymentCancel={() => {
              console.log('Payment cancelled');
            }}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payments;
