import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Body.css"; // Import your CSS file for styling

function OrderConfirmation() {
  const handleCancel = () => {
    // Add logic here to handle cancel action
    // For example, you can close the box or redirect to another page
    console.log("Order confirmation canceled");
  };

  return (
    <div>
      <Header />
      <div className="order-confirmation-box">
        {/* Order Confirmation Card */}
        <div className="card order-confirmation-card">
          <div className="emoji" role="img" aria-label="Wave">👋</div>
          <h1 className="heading">Thank you for your order!</h1>
          <p className="subheading">Your order has been confirmed and is being processed.</p>
          
          {/* Order Details */}
          <div className="order-details">
            <h2 className="subheading">Order Details</h2>
            {/* Display order details here */}
          </div>
        </div>
        
        {/* Additional Information Card */}
        <div className="card additional-info-card">
          <div className="emoji" role="img" aria-label="Email">📧</div>
          <h2 className="heading">You will receive a confirmation email shortly.</h2>
          <p className="subheading">If you have any questions, feel free to contact us.</p>
          
          {/* Action Buttons */}
          <div className="button-group">
            <button className="button primary">Track Order</button>
            <button className="button">Contact Support</button>
            <button className="button" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderConfirmation;
