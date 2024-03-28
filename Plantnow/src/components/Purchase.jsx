import { useEffect } from "react";
import imageFarm from "../assets/farmer 2.jpg";
import { useState } from "react";

function ContactForm() {
  const [allFruits, setAllFruits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dnbway1.onrender.com/api/fruits/showFruits");
        const data = await response.json();
        setAllFruits(data.listAllfruits);
        console.log(data.listAllfruits);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
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
              {allFruits.map((fruit) => (
                <option key={fruit._id} value={fruit.fruitName}>{fruit.fruitName} - {fruit.price}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="numberOfSeedlings">Quantity</label>
            <input
              type="text"
              name="numberOfSeedlings"
              id="numberOfSeedlings"
              placeholder="Quantity"
            />
          </div>

          <div className="input-group">
            <label htmlFor="totalcost">Total Cost</label>
            <input
              type="text"
              name="totalcost"
              id="totalcost"
              placeholder="Total Cost"
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
