import { useEffect, useState } from "react";
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
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    const fruitPrice = parseFloat(formData.service.split(" - ")[1]); // Assuming "fruitName - price" format
    const totalCost = quantity * fruitPrice || 0;
    setFormData({ ...formData, numberOfSeedlings: quantity, totalcost: totalCost });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    } catch (error) {
      console.error('Error:', error);
    }
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
          </div>

          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" placeholder="Address" onChange={handleChange} />
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

          <input type="submit" value="Submit" className="submit-btn" />
        </form>

        <div id="result"></div>
      </div>
    </section>
  );
}

export default ContactForm;
