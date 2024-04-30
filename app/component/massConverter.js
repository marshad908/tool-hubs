// pages/mass-converter.js
"use client"
import { useState } from 'react';

const MassConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedFromUnit, setSelectedFromUnit] = useState('gram');
  const [selectedToUnit, setSelectedToUnit] = useState('gram');
  const [convertedValue, setConvertedValue] = useState('');

  const convertMass = (value, fromUnit, toUnit) => {
    const units = {
      gram: 1,
      kilogram: 0.001,
      milligram: 1000,
      ounce: 0.03527396,
      pound: 0.002204623,
      tonne: 1e-6,
    };

    const result = (value * units[fromUnit]) / units[toUnit];
    return result.toFixed(2) + ' ' + toUnit;
  };

  const handleConvert = () => {
    const value = parseFloat(inputValue);

    if (!isNaN(value) && inputValue.charAt(0) != "-") {
      const result = convertMass(value, selectedFromUnit, selectedToUnit);
      setConvertedValue(result);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
    

      <div className="container mx-auto p-4">
        <div className="max-w-3xl mx-auto bg-white rounded p-6 shadow-md">
          <h1 className="text-3xl font-bold mb-4">Mass Calculator</h1>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">Enter Mass:</label>
            <input
              type="number"
              className="w-full p-2 border text-sm"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-lg  font-medium text-gray-700 mb-2">From Unit:</label>
              <select
                className="w-full p-2 border text-sm"
                value={selectedFromUnit}
                onChange={(e) => setSelectedFromUnit(e.target.value)}
              >
                <option value="gram">Gram</option>
                <option value="kilogram">Kilogram</option>
                <option value="milligram">Milligram</option>
                <option value="ounce">Ounce</option>
                <option value="pound">Pound</option>
                <option value="tonne">Tonne</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">To Unit:</label>
              <select
                className="w-full p-2 border text-sm" 
                value={selectedToUnit}
                onChange={(e) => setSelectedToUnit(e.target.value)}
              >
                <option value="gram">Gram</option>
                <option value="kilogram">Kilogram</option>
                <option value="milligram">Milligram</option>
                <option value="ounce">Ounce</option>
                <option value="pound">Pound</option>
                <option value="tonne">Tonne</option>
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
              <p className="font-bold text-lg">Converted Mass:</p>
              <p className="border p-2 text-sm">{convertedValue}</p>
            </div>
          )}
        </div>
        <div className='pt-8 flex flex-col container mx-auto gap-y-8  max-w-3xl'>
        <p className='text-base font-medium'>
        Immerse yourself in the realm of precise measurements with our dynamic Mass Calculator tool. In various industries, from engineering to chemistry, accurate mass conversion is crucial for successful projects and experiments. Our tool simplifies the process of converting between different units of mass, offering a user-friendly interface and robust functionality. Whether you're an engineer designing structures, a chemist conducting experiments, or a culinary enthusiast measuring ingredients, our Mass Calculator tool streamlines the conversion process, enabling you to achieve precise results effortlessly. Bid farewell to manual calculations and embrace the efficiency of automated mass conversions with our Mass Calculator.</p>
        <p className='text-base font-medium'>
        While the Mass Calculator tool focuses on converting between different units of mass, highlighting its importance in various industries such as engineering, chemistry, and culinary arts, the Length Conversion Tool emphasizes the significance of accurate length conversion in fields like construction, science, and DIY projects. Each tool caters to specific needs and user requirements, offering streamlined solutions to unique challenges. Whether you're optimizing measurements for building projects, conducting scientific research, or preparing recipes, our suite of specialized tools provides the versatility and efficiency you need to excel in your endeavors. Embrace the power of precise conversions with our suite of tools, designed to simplify complex tasks and enhance productivity.</p>
       </div>
      </div>
    </div>
  );
};

export default MassConverter;
