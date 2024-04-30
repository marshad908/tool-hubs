// pages/json-convert.js
"use client"
import { useState } from 'react';
// import styles from '../styles/JsonConvert.module.css'; // You can remove this line if not using external styles

const JsonConvert = () => {
  const [jsonData, setJsonData] = useState('');
  const [convertedData, setConvertedData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPreviewCollapsed, setIsPreviewCollapsed] = useState(false);

  const handleDataChange = (e) => {
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

  const handleConvert = async (action) => {
    setIsLoading(true);

    try {
      if (action === 'minify') {
        const parsedData = JSON.parse(jsonData);
        const minifiedData = JSON.stringify(parsedData);
        setConvertedData(minifiedData);
      } else if (action === 'unminify') {
        const unminifiedData = JSON.stringify(JSON.parse(jsonData), null, 2);
        setConvertedData(unminifiedData);
      }
    } catch (error) {
      console.error('Error processing JSON:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([convertedData], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'converted-data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleTogglePreview = () => {
    setIsPreviewCollapsed(!isPreviewCollapsed);
  };

  return (
    <div className="container mx-auto p-4">
    
        <div className='min-h-screen'>
      <main className="max-w-3xl  mx-auto bg-white p-6 rounded-md shadow-md ">
        <h1 className="text-4xl font-bold mb-4">JSON Conversion</h1>
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">Enter JSON data:</label>
          <textarea
            className="w-full h-32 p-2 border resize-none text-sm"
            placeholder="Enter JSON data here..."
            value={jsonData}
            onChange={handleDataChange}
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
          <button
            className={`bg-blue-500 text-white text-sm px-4 py-2 rounded `}
            onClick={() => handleConvert('minify')}
          >
            {isLoading ? (
              <div className="loader"></div>
            ) : (
              'Minify JSON'
            )}
          </button>
          <button
            className={`bg-green-500 text-white text-sm px-4 py-2 rounded mt-2 sm:mt-0 `}
            onClick={() => handleConvert('unminify')}
          >
            {isLoading ? (
              <div className="loader"></div>
            ) : (
              'Unminify JSON'
            )}
          </button>
          {convertedData && (
            <button
              className={`bg-gray-300 text-gray-700 text-sm px-4 py-2 rounded mt-2 sm:mt-0 `}
              onClick={handleTogglePreview}
            >
              {isPreviewCollapsed ? 'Expand Preview' : 'Collapse Preview'}
            </button>
          )}
          {convertedData && (
            <button
              className={`bg-purple-500 text-white text-sm px-4 py-2 rounded mt-2 sm:mt-0 `}
              onClick={handleDownload}
            >
              Download
            </button>
          )}
        </div>
        {isLoading && (
          <div className="mt-4">
            <p className="font-bold text-lg">Converting...</p>
          </div>
        )}
        {convertedData && (
          <div className={`mt-4 ${isPreviewCollapsed ? 'h-32' : 'h-64'} overflow-y-auto border p-2`}>
            <p className="font-bold text-lg">Converted Data:</p>
            <pre className='text-sm'>{convertedData}</pre>
          </div>
        )}
      </main>
      <div className='pt-8 flex flex-col container mx-auto gap-y-8  max-w-3xl'>
        <p className='text-base font-medium'>
        Experience the efficiency of streamlined JSON data with our JSON Minify tool. In today's fast-paced digital landscape, optimizing data storage and transmission is essential for seamless data processing. Our tool offers a straightforward solution to remove unnecessary whitespace and comments from JSON (JavaScript Object Notation) files, reducing file size and improving data transfer speeds. Whether you're a web developer optimizing website performance, a data engineer managing large datasets, or a mobile app developer aiming for faster load times, our JSON Minify tool streamlines the process, allowing you to focus on maximizing the value of your data. Say goodbye to bloated JSON files and hello to lean, efficient data structures with our JSON Minify tool.</p>
        <p className='text-base font-medium'>
        Unlock the full potential of your JSON data with our JSON Unminify tool. In today's data-driven world, clarity and readability are paramount for effective data analysis and manipulation. Our tool provides a hassle-free solution to expand minified JSON (JavaScript Object Notation) files, restoring them to their original, human-readable format. Whether you're debugging code, examining API responses, or exploring data structures, our JSON Unminify tool simplifies the process, enabling you to gain valuable insights with ease. Say farewell to cryptic, condensed JSON data and embrace the clarity and transparency of fully expanded JSON structures with our JSON Unminify tool. </p>
        <p className='text-base font-medium'>
        While the JSON Minify tool focuses on optimizing JSON data by removing unnecessary whitespace and comments, the JSON Unminify tool emphasizes the importance of restoring minified JSON files to their original, human-readable format for enhanced clarity and readability. Both tools address specific needs in the data processing workflow, catering to different scenarios and user requirements. Whether you're looking to streamline data transmission or improve data analysis, our suite of JSON conversion tools provides the versatility and efficiency you need to excel in your data-driven endeavors. Embrace the power of streamlined data processing with our JSON Minify and Unminify tools, designed to simplify the complexities of JSON data manipulation and optimization.</p>
      </div>
      </div>
    </div>
  );
};

export default JsonConvert;
