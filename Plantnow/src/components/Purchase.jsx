import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import imageFarm from "../assets/farmer 2.jpg";

function ContactForm() {
  const [allFruits, setAllFruits] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    tel: "",
    service: "",
    numberOfSeedlings: "",
    totalcost: ""
  });
  const [formErrors, setFormErrors] = useState({}); // State for form errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dnbway1.onrender.com/api/fruits/showFruits");
        const data = await response.json();
        setAllFruits(data.listAllfruits);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error message when user starts typing in a field
    setFormErrors({ ...formErrors, [e.target.name]: '' });
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    const fruitPrice = parseFloat(formData.service.split(" - ")[1]); // Assuming "fruitName - price" format
    const totalCost = quantity * fruitPrice || 0;
    setFormData({ ...formData, numberOfSeedlings: quantity, totalcost: totalCost });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('https://plantnow-backend.onrender.com/api/seedlings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log('Response:', data);
        // You can handle the response data here

        // Navigate to Confirmation page after successful form submission
        window.location.href = "/Confirmation";
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  // Validate form fields
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Check if name is empty
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    // Check if address is empty
    if (!formData.address.trim()) {
      errors.address = 'Address is required';
      isValid = false;
    }

    // You can add more validation rules for other fields here...

    setFormErrors(errors);
    return isValid;
  };

  return (
    <section className="form">
      <div className="form-container">
        <div className="img">
          <img src={imageFarm} alt="image" />
        </div>
        <form onSubmit={handleSubmit} className="form-content" id="myForm">
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" placeholder="Name" onChange={handleChange} />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" placeholder="Address" onChange={handleChange} />
            {formErrors.address && <span className="error">{formErrors.address}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" placeholder="City" onChange={handleChange} />
          </div>

          <div className="input-group">
            <label htmlFor="state">State</label>
            <input type="text" name="state" id="state" placeholder="State" onChange={handleChange} />
          </div>

          <div className="input-group">
            <label htmlFor="country">Country</label>
            <input type="text" name="country" id="country" placeholder="Country" onChange={handleChange} />
          </div>

          <div className="input-group">
            <label htmlFor="tel">Telephone</label>
            <input type="tel" name="tel" id="tel" placeholder="Telephone Number" onChange={handleChange} />
          </div>

          <div className="input-group">
            <label htmlFor="plantName">Plant name</label>
            <select name="service" id="service" onChange={handleChange}>
              <option value="">Select a fruit</option>
              {allFruits.map((fruit) => (
                <option key={fruit._id} value={`${fruit.fruitName} - ${fruit.price}`}>{fruit.fruitName} - {fruit.price}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="numberOfSeedlings">Quantity</label>
            <input type="number" name="numberOfSeedlings" id="numberOfSeedlings" placeholder="Quantity" onChange={handleQuantityChange} />
          </div>

          <div className="input-group">
            <label htmlFor="totalcost">Total Cost</label>
            <input type="text" name="totalcost" id="totalcost" placeholder="Total Cost" value={formData.totalcost} readOnly />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        <div id="result"></div>
      </div>
    </section>
  );
}

export default ContactForm;
