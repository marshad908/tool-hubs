// pages/css-unit-converter.js
"use client"
import { useState } from 'react';

const CssUnitConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('px');
  const [toUnit, setToUnit] = useState('rem');
  const [convertedValue, setConvertedValue] = useState('');

  const convertUnits = () => {
    const inputValueFloat = parseFloat(inputValue);
    if (isNaN(inputValueFloat)) {
      setConvertedValue('Invalid Input');
      return;
    }

    const conversionFactors = {
      px: {
        rem: 0.0625,
        em: 0.0625,
        '%': 6.25,
        vh: 0.009375,
        vw: 0.015625,
        ppt: 0.0138889,
        ch: 0.0416667,
        in: 0.0104167,
      },
      rem: {
        px: 16,
        em: 1,
        '%': 100,
        vh: 1.5,
        vw: 2.5,
        ppt: 2.22222,
        ch: 6.66667,
        in: 1.66667,
      },
      em: {
        px: 16,
        rem: 1,
        '%': 100,
        vh: 1.5,
        vw: 2.5,
        ppt: 2.22222,
        ch: 6.66667,
        in: 1.66667,
      },
      '%': {
        px: 0.16,
        rem: 0.01,
        em: 0.01,
        vh: 0.15,
        vw: 0.25,
        ppt: 0.222222,
        ch: 0.666667,
        in: 0.166667,
      },
      vh: {
        px: 106.66667,
        rem: 0.66667,
        em: 0.66667,
        '%': 6.66667,
        vw: 1.66667,
        ppt: 1.48148,
        ch: 4.44444,
        in: 1.11111,
      },
      vw: {
        px: 64,
        rem: 0.4,
        em: 0.4,
        '%': 4,
        vh: 0.6,
        ppt: 0.88889,
        ch: 2.66667,
        in: 0.66667,
      },
      ppt: {
        px: 72,
        rem: 0.555556,
        em: 0.555556,
        '%': 5.555556,
        vh: 0.675676,
        vw: 1.125,
        ch: 3.375,
        in: 0.84375,
      },
      ch: {
        px: 24,
        rem: 0.15,
        em: 0.15,
        '%': 1.5,
        vh: 0.225,
        vw: 0.375,
        ppt: 0.266667,
        in: 0.25,
      },
      in: {
        px: 96,
        rem: 0.6,
        em: 0.6,
        '%': 6,
        vh: 0.9,
        vw: 1.5,
        ppt: 1.125,
        ch: 4.8,
      },
    };

    const converted = inputValueFloat * conversionFactors[fromUnit][toUnit];
    setConvertedValue(`${converted.toFixed(6)} ${toUnit}`);
  };

  return (
    <div className="min-h-screen p-8 container mx-auto">
     

      <main className="max-w-3xl w-full p-6 bg-white rounded-md shadow-md mx-auto">
        <h1 className="text-4xl font-bold mb-4">CSS Unit Converter</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Value:</label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full p-2 border rounded-md text-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">From Unit:</label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="px">px</option>
              <option value="rem">rem</option>
              <option value="em">em</option>
              <option value="%">%</option>
              <option value="vh">vh</option>
              <option value="vw">vw</option>
              <option value="ppt">ppt</option>
              <option value="ch">ch</option>
              <option value="in">in</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">To Unit:</label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="px">px</option>
              <option value="rem">rem</option>
              <option value="em">em</option>
              <option value="%">%</option>
              <option value="vh">vh</option>
              <option value="vw">vw</option>
              <option value="ppt">ppt</option>
              <option value="ch">ch</option>
              <option value="in">in</option>
            </select>
          </div>
        </div>
        <button
          className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={convertUnits}
        >
          Convert
        </button>
        {convertedValue && (
          <div className="mt-4">
            <p className="font-bold text-lg">Converted Value:</p>
            <p className="border p-2 rounded-md text-sm">{convertedValue}</p>
          </div>
        )}
      </main>
      <div className='pt-8 flex flex-col container mx-auto gap-y-8 max-w-3xl'>
        <p className='text-base font-medium'>
        Revolutionize your CSS workflow with our innovative CSS Unit Converter. In the fast-paced world of web development, precision and efficiency are paramount. Our tool simplifies the complex task of unit conversion, allowing you to seamlessly transition between different CSS units with ease. Whether you're working with pixels, ems, rems, or percentages, our converter provides real-time feedback, ensuring accuracy and consistency in your designs. Say goodbye to manual calculations and hello to a streamlined development process. With our CSS Unit Converter, you can focus on bringing your creative vision to life without the hassle of tedious conversions.</p>
        <p className='text-base font-medium'>Stay ahead of the curve with our cutting-edge CSS Unit Converter. In today's digital landscape, responsiveness is key. With a myriad of devices and screen sizes in use, ensuring your designs adapt seamlessly is essential. Our tool empowers you to create fluid and adaptable layouts that look stunning across all platforms. By effortlessly converting between relative and absolute units, you can achieve a consistent user experience that captivates your audience. Whether you're building a responsive website, a mobile app, or an interactive web application, our CSS Unit Converter provides the flexibility and precision you need to succeed.</p>
        <p className='text-base font-medium'>Elevate your development process with our comprehensive CSS Unit Converter. Designed for developers, by developers, our tool is the ultimate companion for mastering the intricacies of CSS units. From novices to seasoned professionals, our converter caters to all skill levels, offering intuitive controls and real-time conversions. Take your designs to new heights, improve efficiency, and unleash your creativity with our CSS Unit Converter by your side. Whether you're coding a personal project or collaborating on a large-scale endeavor, our tool empowers you to achieve pixel-perfect precision and unparalleled design quality.</p>
      </div>
    </div>
  );
};

export default CssUnitConverter;
