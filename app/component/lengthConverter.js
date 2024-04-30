// pages/length-converter.js
"use client"
import { useState } from 'react';

const LengthConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedFromUnit, setSelectedFromUnit] = useState('meter');
  const [selectedToUnit, setSelectedToUnit] = useState('meter');
  const [convertedValue, setConvertedValue] = useState('');

  const convertLength = (value, fromUnit, toUnit) => {
    const units = {
      meter: 1,
      centimeter: 100,
      millimeter: 1000,
      kilometer: 0.001,
      inch: 39.3701,
      foot: 3.28084,
      yard: 1.09361,
      mile: 0.000621371,
    };

    const result = (value * units[fromUnit]) / units[toUnit];
    return result.toFixed(2) + ' ' + toUnit;
  };

  const handleConvert = () => {
    const value = parseFloat(inputValue);

    if (!isNaN(value) && inputValue.charAt(0) != "-") {
      const result = convertLength(value, selectedFromUnit, selectedToUnit);
      setConvertedValue(result);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
     

      <div className="container mx-auto p-4">
        <div className="max-w-3xl mx-auto bg-white rounded p-6 shadow-md">
          <h1 className="text-3xl font-bold mb-4">Length Calculator</h1>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">Enter Length:</label>
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
                <option value="meter">Meter</option>
                <option value="centimeter">Centimeter</option>
                <option value="millimeter">Millimeter</option>
                <option value="kilometer">Kilometer</option>
                <option value="inch">Inch</option>
                <option value="foot">Foot</option>
                <option value="yard">Yard</option>
                <option value="mile">Mile</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">To Unit:</label>
              <select
                className="w-full p-2 border text-sm"
                value={selectedToUnit}
                onChange={(e) => setSelectedToUnit(e.target.value)}
              >
                <option value="meter">Meter</option>
                <option value="centimeter">Centimeter</option>
                <option value="millimeter">Millimeter</option>
                <option value="kilometer">Kilometer</option>
                <option value="inch">Inch</option>
                <option value="foot">Foot</option>
                <option value="yard">Yard</option>
                <option value="mile">Mile</option>
              </select>
            </div>
          </div>

          <button
            className="bg-blue-500 text-white text-sm px-4 py-2 rounded"
            onClick={handleConvert}
          >
            Convert
          </button>

          {convertedValue && (
            <div className="mt-4">
              <p className="font-bold text-lg">Converted Length:</p>
              <p className="border p-2 text-sm">{convertedValue}</p>
            </div>
          )}
        </div>
        <div className='pt-8 flex flex-col container mx-auto gap-y-8  max-w-3xl'>
        <p className='text-base font-medium'>
        Explore the world of precise measurements with our versatile Length Calculator tool. In various fields, from construction to science, accurate length conversion is essential for successful projects and experiments. Our tool simplifies the process of converting between different units of length, providing a user-friendly interface and robust functionality. Whether you're an architect designing a building, a student conducting scientific research, or a DIY enthusiast working on home projects, our Length Calculator tool streamlines the conversion process, allowing you to focus on achieving precise results. Say goodbye to manual calculations and hello to effortless length conversions with our Length Calculator.</p>
        <p className='text-base font-medium'>
        While the Length Calculator tool focuses on converting between different units of length, emphasizing its importance in various fields such as construction, science, and DIY projects, the JSON Minify and Unminify tools address specific needs in the data processing workflow. Each tool caters to different scenarios and user requirements, offering streamlined solutions to specific challenges. Whether you're optimizing data transmission, improving data analysis, or simplifying JSON data manipulation, our suite of tools provides the versatility and efficiency you need to excel in your respective endeavors. Embrace the power of streamlined processing with our suite of specialized tools, designed to simplify complex tasks and enhance productivity. </p>
        </div>
      </div>
    </div>
  );
};

export default LengthConverter;
