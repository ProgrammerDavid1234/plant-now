import React, { useState, useEffect } from 'react';

const CalculatorComponent = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // Fetch data from the REST API
    fetch('https://dnbway1.onrender.com/api/fruits/showFruits')
      .then(response => response.json())
      .then(data => {
        setApiData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleInputChange1 = (event) => {
    const value = event.target.value;
    setInputValue1(value);
    // Calculate the result using data from the API and input value 1
    if (apiData && !isNaN(value)) {
      const result = parseFloat(value) * apiData.factor;
      setInputValue2(result.toFixed(2)); 
    }
  };

  return (
    <div>
      <label>
        Input 1:
        <input 
          type="text" 
          value={inputValue1} 
          onChange={handleInputChange1} 
        />
      </label>
      <label>
        Input 2:
        <input 
          type="text" 
          value={inputValue2} 
          readOnly 
        />
      </label>
    </div>
  );
};

export default CalculatorComponent;