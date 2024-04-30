// pages/index.js

"use client"
import { useState } from 'react';
import json2csv from 'json2csv';

const JsonToCsv = () => {
  const [jsonData, setJsonData] = useState('');
  const [csvData, setCsvData] = useState('');

  const handleJsonChange = (e) => {
    setJsonData(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setJsonData(event.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleConvert = () => {
    try {
      const parsedJson = JSON.parse(jsonData);
      const csv = json2csv.parse(parsedJson);
      setCsvData(csv);
    } catch (error) {
      console.error('Invalid JSON format');
    }
  };

  const handleDownload = () => {
    const blob = new Blob([csvData], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'data.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto p-4  min-h-screen">
    

      <main className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md w-full">
        <h1 className="text-4xl font-bold mb-4">JSON to CSV </h1>
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">Enter JSON data:</label>
          <textarea
            className="w-full h-32 p-2 border resize-none text-sm"
            placeholder="Enter JSON data here..."
            value={jsonData}
            onChange={handleJsonChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">Or upload JSON file:</label>
          <input
            type="file"
            accept=".json"
            onChange={handleFileChange}
            className="border p-2 text-sm"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded" onClick={handleConvert}>
            Convert
          </button>
          {csvData && (
            <button className="bg-green-500 text-white text-sm px-4 py-2 rounded mt-2 sm:mt-0" onClick={handleDownload}>
              Download CSV
            </button>
          )}
        </div>
        {csvData && (
          <div className="mt-4">
            <p className="font-bold text-lg">CSV Output:</p>
            <pre className="border p-2 overflow-x-auto text-sm">{csvData}</pre>
          </div>
        )}
      </main>
      <div className='pt-8 flex flex-col container mx-auto gap-y-8  max-w-3xl'>
        <p className='text-base font-medium'>
        Discover the power of seamless data conversion with our innovative JSON to CSV Converter. In today's data-driven landscape, flexibility and efficiency are paramount. Our converter provides a hassle-free solution to translate JSON (JavaScript Object Notation) data into CSV (Comma-Separated Values) format, offering users an intuitive interface and robust functionality. Whether you're a data analyst, a business intelligence professional, or a software developer, our tool simplifies the process, eliminating the need for manual conversion and streamlining your data management workflow. Say goodbye to data format complexities and welcome the simplicity of streamlined data translation with our JSON to CSV Converter.</p>
        <p className='text-base font-medium'>
        Stay ahead of the data transformation curve with our cutting-edge JSON to CSV Converter. As data volumes continue to grow, the demand for agile data handling tools becomes increasingly evident. Our converter facilitates seamless conversion between JSON and CSV formats, empowering users to effortlessly navigate through large datasets with ease. Whether you're preparing data for visualization, integrating data into databases, or sharing insights with stakeholders, our tool offers customizable options and real-time previews to ensure accuracy and efficiency. With support for complex data structures and robust error handling capabilities, our JSON to CSV Converter is your trusted ally in extracting meaningful insights from your data. </p>
         </div>
  
    </div>

  );
};

export default JsonToCsv;
