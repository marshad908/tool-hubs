// pages/temperature-converter.js
"use client"
import { useState } from 'react';

const TemperatureConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedFromUnit, setSelectedFromUnit] = useState('celsius');
  const [selectedToUnit, setSelectedToUnit] = useState('celsius');
  const [convertedValue, setConvertedValue] = useState('');

  const convertTemperature = (value, fromUnit, toUnit) => {
    const convertCelsius = (value, targetUnit) => {
      switch (targetUnit) {
        case 'celsius':
          return value;
        case 'fahrenheit':
          return (value * 9) / 5 + 32;
        case 'kelvin':
          return value + 273.15;
        default:
          return value;
      }
    };

    const celsiusValue = convertCelsius(value, fromUnit);
    switch (toUnit) {
      case 'celsius':
        return celsiusValue.toFixed(2) + ' °C';
      case 'fahrenheit':
        return ((celsiusValue * 9) / 5).toFixed(2) + ' °F';
      case 'kelvin':
        return (celsiusValue + 273.15).toFixed(2) + ' K';
      default:
        return celsiusValue.toFixed(2) + ' °C';
    }
  };

  const handleConvert = () => {
    const value = parseFloat(inputValue);

    if (!isNaN(value)) {
      const result = convertTemperature(value, selectedFromUnit, selectedToUnit);
      setConvertedValue(result);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      

      <div className="container mx-auto p-4">
        <div className="max-w-3xl mx-auto bg-white rounded p-6 shadow-md">
          <h1 className="text-3xl font-bold mb-4">Temperature Converter</h1>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">Enter Temperature:</label>
            <input
              type="number"
              className="w-full p-2 border text-sm"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">From Unit:</label>
              <select
                className="w-full p-2 border text-sm"
                value={selectedFromUnit}
                onChange={(e) => setSelectedFromUnit(e.target.value)}
              >
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">To Unit:</label>
              <select
                className="w-full p-2 border text-sm"
                value={selectedToUnit}
                onChange={(e) => setSelectedToUnit(e.target.value)}
              >
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
              </select>
            </div>
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded text-sm"
            onClick={handleConvert}
          >
            Convert
          </button>

          {convertedValue && (
            <div className="mt-4">
              <p className="font-bold text-lg">Converted Temperature:</p>
              <p className="border p-2 text-sm">{convertedValue}</p>
            </div>
          )}
        </div>
        <div className='pt-8 flex flex-col container mx-auto gap-y-8  max-w-3xl'>
        <p className='text-base font-medium'>
        
        Dive into the realm of precise temperature conversions with our versatile Temperature Converter tool. Whether you're a scientist conducting experiments, a chef following a recipe, or a traveler planning a trip, accurate temperature conversion is essential in various aspects of life. Our tool simplifies the process of converting between different temperature scales, providing a user-friendly interface and robust functionality. Say goodbye to confusing conversions and hello to effortless temperature adjustments with our Temperature Converter tool. Embrace the convenience of precise temperature conversions, ensuring your projects, recipes, and travel plans are executed with accuracy and efficiency.</p>
        <p className='text-base font-medium'>
        While the Temperature Converter tool focuses on converting between different temperature scales, emphasizing its importance in various contexts such as scientific research, culinary arts, and travel planning, the Secure Password Generator tool highlights the significance of generating strong and unique passwords to enhance digital security. Each tool addresses specific needs and user requirements, offering tailored solutions to unique challenges. Whether you're converting temperatures for experiments, securing your online accounts with robust passwords, or tackling other tasks, our suite of specialized tools provides the versatility and efficiency you need to excel in your endeavors. Embrace the power of specialized tools with our suite of offerings, designed to simplify complex tasks and enhance productivity.</p>
       </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;
