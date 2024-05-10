
function OrderConfirmation() {
  return (
    <div className="container">
      <div className="cardContainer">
        <div className="card" style={{ backgroundColor: '#e0ffff' }}>
          <div className="hand">👋</div>
          <p className="text">Your order confirmed!</p>
          <p className="text">
            You will be receiving an E-mail with order details.
          </p>
        </div>
        <div className="card" style={{ backgroundColor: '#fffafa' }}>
          <div className="hand">👋</div>
          <p className="text">Your order confirmed!</p>
          <p className="text">
            You will be receiving a confirmation E-mail with order details.
          </p>
          <button className="button">Go Back</button>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
