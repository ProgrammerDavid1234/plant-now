import React from "react";
import imageFarm from "../assets/farmer 2.jpg";

function ContactForm() {
  return (
    <section className="form" id="contact">
      <div className="form-container">
        <div className="img">
          <img src={imageFarm} alt="image" />
        </div>
        <form action="" method="get" className="form-content" id="myForm">
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>

          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
            />
          </div>

          <div className="input-group">
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" placeholder="City" />
          </div>

          <div className="input-group">
            <label htmlFor="state">State</label>
            <input type="text" name="state" id="state" placeholder="State" />
          </div>

          <div className="input-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Country"
            />
          </div>

          <div className="input-group">
            <label htmlFor="tel">Telephone</label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Telephone Number"
            />
          </div>

          <div className="input-group">
            <label htmlFor="plantName">Plant name</label>
            <select name="service" id="service">
              <option value="banana">Banana</option>
              <option value="breadfruit">Bread Fruit(Ukwa)</option>
              <option value="pineapple">Pineapple</option>
              <option value="coconut">Coconut</option>
              <option value="avocado">Avocado</option>
              <option value="guava">Guava</option>
              <option value="tangerine">Tangerine</option>
              <option value="local apple">Local Apple</option>
              <option value="pear">Pear</option>
              <option value="sour sop">Sour Sop</option>
              <option value="mango">Mango</option>
              <option value="cocoa">Cocoa</option>
              <option value="maize">Maize</option>
              <option value="orange">Orange</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="numberOfSeedlings">Number of Seedlings</label>
            <input
              type="text"
              name="numberOfSeedlings"
              id="numberOfSeedlings"
              placeholder="Number of Seedlings"
            />
          </div>

          <input type="submit" value="Submit" className="submit-btn" />
        </form>

        <div id="result"></div>
      </div>
    </section>
  );
}

export default ContactForm;
