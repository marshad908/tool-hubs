// pages/index.js
"use client"
import { useState } from 'react';
import Papa from 'papaparse';

const CsvToJson = () => {
  const [csvData, setCsvData] = useState('');
  const [jsonData, setJsonData] = useState('');
  const [isJsonPreviewExpanded, setIsJsonPreviewExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCsvChange = (e) => {
    setCsvData(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCsvData(event.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleConvert = () => {
    setIsLoading(true);

    Papa.parse(csvData, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        setJsonData(JSON.stringify(results.data, null, 2));
        setIsJsonPreviewExpanded(false);
        setIsLoading(false);
      },
      error: (error) => {
        console.error('CSV parsing error:', error.message);
        setIsLoading(false);
      },
    });
  };

  const handleDownload = () => {
    const blob = new Blob([jsonData], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleTogglePreview = () => {
    setIsJsonPreviewExpanded(!isJsonPreviewExpanded);
  };

  return (
   

      <div className="container mx-auto p-4  min-h-screen">
      

      <main className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md w-full">
        <h1 className="text-4xl font-bold mb-4">CSV to JSON</h1>
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">Enter CSV data:</label>
          <textarea
            className="w-full h-32 p-2 border resize-none text-sm"
            placeholder="Enter CSV data here..."
            value={csvData}
            onChange={handleCsvChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Or upload CSV file:</label>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="border p-2 text-sm"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded" onClick={handleConvert}>
            {isLoading ? (
              <div className="loader"></div>
            ) : (
              'Convert'
            )}
          </button>
          {jsonData && (
            <button className="bg-green-500 text-white text-sm px-4 py-2 rounded mt-2 sm:mt-0" onClick={handleDownload}>
              Download JSON
            </button>
          )}
          {jsonData && (
            <button
              className="bg-gray-300 text-gray-700 text-sm px-4 py-2 rounded mt-2 sm:mt-0"
              onClick={handleTogglePreview}
            >
              {isJsonPreviewExpanded ? 'Collapse Preview' : 'Expand Preview'}
            </button>
          )}
        </div>
        {isLoading && (
          <div className="mt-4">
            <p className="font-bold text-lg">Converting...</p>
          </div>
        )}
        {jsonData && (
          <div className={`mt-4 ${isJsonPreviewExpanded ? 'h-64 overflow-y-auto' : 'h-32'}`}>
            <p className="font-bold">JSON Output:</p>
            <pre className="border p-2 overflow-x-auto text-sm">{jsonData}</pre>
          </div>
        )}
      </main>
      <div className='pt-8 flex flex-col container mx-auto gap-y-8  max-w-3xl'>
        <p className='text-base font-medium'>
        Unlock the versatility of your data with our CSV to JSON Converter. In today's data-driven world, seamless data conversion is essential for efficient analysis and utilization. Our tool simplifies the process of converting CSV (Comma-Separated Values) files into JSON (JavaScript Object Notation) format, enabling you to transform your tabular data into a structured, easily readable format. Whether you're a data analyst, developer, or business professional, our converter provides a user-friendly interface and robust functionality to meet your data conversion needs. Say goodbye to manual data manipulation and hello to streamlined workflows with our CSV to JSON Converter at your disposal.</p>
        <p className='text-base font-medium'>Stay ahead of the data transformation curve with our cutting-edge CSV to JSON Converter. As organizations increasingly rely on data to drive decision-making processes, the ability to efficiently convert and manipulate data becomes paramount. Our tool empowers you to effortlessly convert CSV files into JSON format, enabling seamless integration with various applications, databases, and analytics platforms. By providing customizable options and real-time previews, our converter ensures accuracy and consistency in your data transformations. Whether you're processing large datasets or performing routine data conversions, our CSV to JSON Converter offers the flexibility and reliability you need to excel in your data-driven endeavors.</p>
       </div>
    </div>
  );
};

export default CsvToJson;
