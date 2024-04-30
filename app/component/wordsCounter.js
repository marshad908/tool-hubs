// pages/word-counter.js
"use client"
import { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');

  const getWordCount = () => {
    const words = text.split(/\s+/).filter((word) => word.length > 0);
    return words.length;
  };

  const getCharacterCount = () => {
    return text.length;
  };

  const getCharacterCountWithoutSpaces = () => {
    const charactersWithoutSpaces = text.replace(/\s/g, '');
    return charactersWithoutSpaces.length;
  };

  const getSentenceCount = () => {
    const sentences = text.split(/[.!?]/).filter((sentence) => sentence.length > 0);
    return sentences.length;
  };

  const getLineCount = () => {
    const lines = text.split('\n');
    return lines.length;
  };

  const getParagraphCount = () => {
    const paragraphs = text.split('\n\n');
    return paragraphs.length;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard!');
  };

  return (
    <div className="min-h-screen p-6 container mx-auto ">
      

      <main className="max-w-3xl mx-auto  w-full p-6 bg-white rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-4">Word Counter Online</h1>
        <textarea
          className="w-full p-2 border rounded-md mb-4 text-sm"
          rows="5"
          placeholder="Enter text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Word Count:</p>
            <p className="text-lg font-bold">{getWordCount()}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Character Count:</p>
            <p className="text-lg font-bold">{getCharacterCount()}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Character Count (No Spaces):</p>
            <p className="text-lg font-bold">{getCharacterCountWithoutSpaces()}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Sentence Count:</p>
            <p className="text-lg font-bold">{getSentenceCount()}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Line Count:</p>
            <p className="text-lg font-bold">{getLineCount()}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Paragraph Count:</p>
            <p className="text-lg font-bold">{getParagraphCount()}</p>
          </div>
        </div>
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition"
            onClick={copyToClipboard}
          >
            Copy to Clipboard
          </button>
        </div>
      </main>
      <div className='pt-8 flex flex-col container mx-auto gap-y-8  max-w-3xl'>
        <p className='text-base font-medium'>
        
        Enter the world of efficient text analysis with our intuitive Word Counter Online tool. Whether you're a writer, editor, student, or professional, accurately counting words is crucial for various tasks, from writing assignments to analyzing text documents. Our tool simplifies the process of counting words in a document or text passage, providing a user-friendly interface and reliable functionality. Say goodbye to manual word counting and hello to streamlined text analysis with our Word Counter Online tool. Embrace the convenience of accurate word counts, ensuring your writing projects, academic papers, and business documents meet the required criteria with ease.</p>
        <p className='text-base font-medium'>
        While the Word Counter Online tool focuses on accurately counting words in a document or text passage, highlighting its importance in various contexts such as writing, editing, and academic research, the Temperature Converter Tool emphasizes the significance of converting temperatures between different scales for scientific experiments, culinary endeavors, and travel planning. Each tool addresses specific needs and user requirements, offering tailored solutions to unique challenges. Whether you're analyzing text for word count, converting temperatures for experiments, or tackling other tasks, our suite of specialized tools provides the versatility and efficiency you need to excel in your endeavors. Embrace the power of specialized tools with our suite of offerings, designed to simplify complex tasks and enhance productivity.</p>
       </div>
    </div>
  );
};

export default WordCounter;
