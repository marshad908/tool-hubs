// pages/password-generator.js
"use client"
import { useState, useEffect } from 'react';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [copyButtonText, setCopyButtonText] = useState('Copy to Clipboard');

  const handleGeneratePassword = () => {
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?/';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';

    let charset = '';
    if (includeNumbers) charset += numbers;
    if (includeSpecialChars) charset += specialChars;
    if (includeUppercase) charset += uppercaseChars;
    if (includeLowercase) charset += lowercaseChars;

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    setGeneratedPassword(password);
    setCopyButtonText('Copy to Clipboard');
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
    setCopyButtonText('Copied!');
    setTimeout(() => {
      setCopyButtonText('Copy to Clipboard');
    }, 3000);
  };

  useEffect(() => {
    return () => {
      setCopyButtonText('Copy to Clipboard');
    };
  }, []);

  return (
    <div className="min-h-screen container mx-auto p-6">
      

      <main className="max-w-3xl w-full p-6 bg-white rounded-md mx-auto  shadow-md">
        <h1 className="text-4xl font-bold mb-4">Secure Password Generator</h1>
        <div className="mb-4 flex flex-row gap-2 items-baseline">
          <label className="block text-base font-medium text-gray-700 mb-2">Password Length:</label>
          <input
            type="number"
            min="6"
            max="30"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            className="w-2/3 p-2 border rounded-md text-sm"
          />
        </div>
        <div className="mb-2 flex flex-row gap-2 items-center">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          <label className="block text-sm font-medium text-gray-700 ">:Include Numbers</label>
        </div>
        <div className="mb-2 flex flex-row gap-2 items-center">
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          />
          <label className="block text-sm font-medium text-gray-700 ">:Include Special Characters</label>
        </div>
        <div className="mb-2 flex flex-row gap-2 items-center">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          <label className="block text-sm font-medium text-gray-700 ">:Include Uppercase Letters</label>
        </div>
        <div className="mb-8 flex flex-row gap-2 items-center">
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
          <label className="block text-sm font-medium text-gray-700 ">:Include Lowercase Letters</label>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={handleGeneratePassword}
        >
          Generate Password
        </button>
        {generatedPassword && (
          <div className="mt-4">
            <p className="font-bold text-lg">Generated Password:</p>
            <pre className="border p-2 overflow-x-auto text-sm">{generatedPassword}</pre>
            <button
              className="mt-2 bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600 transition"
              onClick={handleCopyToClipboard}
            >
              {copyButtonText}
            </button>
          </div>
        )}
      </main>
      <div className='pt-8 flex flex-col container mx-auto gap-y-8  max-w-3xl'>
        <p className='text-base font-medium'>
        
Enter the realm of digital security with our advanced Secure Password Generator tool. In an era marked by increasing cybersecurity threats, safeguarding your online accounts with strong, unique passwords is essential. Our tool simplifies the process of generating secure passwords, offering a robust solution to create passwords that are resistant to hacking attempts. Whether you're protecting your email, social media accounts, or financial data, our Secure Password Generator tool provides a user-friendly interface and advanced algorithms to ensure the utmost security. Say goodbye to weak and easily guessable passwords, and fortify your online defenses with our Secure Password Generator.</p>
        <p className='text-base font-medium'>
        While the Secure Password Generator tool focuses on creating strong and unique passwords to enhance digital security, highlighting its importance in safeguarding online accounts against cybersecurity threats, the Mass Conversion Tool and Length Conversion Tool address specific needs in the fields of measurement and data processing. Each tool offers tailored solutions to unique challenges, catering to the diverse requirements of users across different domains. Whether you're securing your online accounts, converting measurements for engineering projects, or processing data for scientific research, our suite of specialized tools provides the versatility and efficiency you need to excel in your endeavors. Embrace the power of specialized tools with our suite of offerings, designed to simplify complex tasks and enhance productivity.</p>
       </div>
    </div>
  );
};

export default PasswordGenerator;
