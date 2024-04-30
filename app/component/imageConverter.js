// pages/image-converter.js
"use client"
import { useState, useRef } from 'react';

const ImageConverter = () => {
  const [image, setImage] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState('jpeg');
  const [convertedUrl, setConvertedUrl] = useState(null);

  const imageInputRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setConvertedUrl(null);
    }
  };

  const handleConvertImage = () => {
    if (!image) return;
  
    const img = new Image();
  
    img.onload = () => {
      let convertedImageUrl;
  
      if (selectedFormat === 'svg') {
        const xml = new XMLSerializer().serializeToString(img);
        convertedImageUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(xml)}`;
        setConvertedUrl(convertedImageUrl);
      } else {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        canvas.width = img.width;
        canvas.height = img.height;
        
        context.drawImage(img, 0, 0, img.width, img.height);
  
        canvas.toBlob((blob) => {
          convertedImageUrl = URL.createObjectURL(blob);
          setConvertedUrl(convertedImageUrl);
        }, `image/${selectedFormat}`);
      }
    };
  
    img.src = image;
    img.alt = image;
    console.log(img.alt)
    
  };
  

  const handleDownloadImage = () => {
    if (!convertedUrl) return;

    const link = document.createElement('a');
    link.href = convertedUrl;
    link.download = `converted_image.${selectedFormat}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen container mx-auto p-6 ">
   

      <main className="max-w-3xl mx-auto  w-full p-6 bg-white rounded-md shadow-md relative">
        <h1 className="text-4xl font-bold mb-4">Image Format Converter</h1>
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={imageInputRef}
            className="w-full p-2 border rounded-md text-sm"
          />
        </div>
        {image && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Format:</label>
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="jpeg">JPEG</option>
              <option value="png">PNG</option>
              <option value="webp">WEBP</option>
              <option value="gif">GIF</option>
            </select>
          </div>
        )}
          <div className=" flex items-center justify-between">
        <button
          className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={handleConvertImage}
          disabled={!image}
        >
          Convert
        </button>
        {convertedUrl && (
            <button
              className="bg-green-500 text-white text-sm px-4 py-2 rounded-md hover:bg-green-600 transition"
              onClick={handleDownloadImage}
            >
              Download Converted Image
            </button>
           
            )}
          </div>
      </main>
      <div className='pt-8 flex flex-col container mx-auto gap-y-8  max-w-3xl'>
        <p className='text-base font-medium'>
        Unleash the full potential of your digital imagery with our Image Format Converter. In today's visual-centric world, having the ability to seamlessly convert between different image formats is essential for optimal compatibility and flexibility. Our tool simplifies the process of converting images from one format to another, empowering you to effortlessly transform your visuals to suit your specific needs. Whether you're a photographer, graphic designer, or website developer, our converter provides a user-friendly solution to meet your image format conversion requirements. Say goodbye to compatibility issues and hello to versatile image management with our Image Format Converter at your fingertips.</p>
        <p className='text-base font-medium'>
Embark on a journey of image versatility with our state-of-the-art Image Format Converter. As digital content evolves, the need for adaptable image formats becomes increasingly apparent. Our converter equips you with the tools to seamlessly switch between popular image formats like JPEG, PNG, WEBP, and GIF, ensuring your visuals are optimized for any context. Whether you're preparing images for online publication, print media, or archival purposes, our converter offers customizable options and real-time previews to ensure optimal results. With support for batch processing and a range of output configurations, our Image Format Converter empowers you to streamline your image management workflow with precision and efficiency.</p>
        <p className='text-base font-medium'>
Revolutionize your digital toolkit with our comprehensive Image Format Converter. Engineered to meet the diverse needs of modern creatives, our tool sets the standard for image conversion excellence. With intuitive controls and advanced features, our converter simplifies complex tasks, allowing you to convert, resize, and optimize your images with ease. Whether you're enhancing your online presence, preparing images for professional printing, or organizing your digital library, our Image Format Converter is your go-to solution for seamless image transformation. Embrace the power of versatility and unlock new possibilities for your visual projects with our Image Format Converter leading the way.</p>
      </div>
    </div>
  );
};

export default ImageConverter;
