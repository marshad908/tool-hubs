// pages/color-palette-generator.js
"use client";
import { useState } from 'react';
import tinycolor from 'tinycolor2';


const ColorPaletteGenerator = () => {
  const [baseColor, setBaseColor] = useState('#3498db');
  const [saturation, setSaturation] = useState(0);
  const [lightness, setLightness] = useState(0);
  const [palette, setPalette] = useState([]);

  const generatePalette = () => {
    const color = tinycolor(baseColor);
    const newPalette = [];

    for (let i = 0; i < 5; i++) {
      const modifiedColor = color.clone().spin(60 * i).saturate(saturation).lighten(lightness);
      const hexCode = modifiedColor.toString();
      newPalette.push({ hexCode, color: modifiedColor });
    }

    setPalette(newPalette);
  };

  return (
    <div className="container mx-auto   p-8  min-h-screen">
     

      <main className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md w-full">
        <h1 className="text-4xl font-bold mb-4">Color Palette</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Base Color:</label>
          <input
            type="color"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            className="border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Saturation:</label>
          <input
            type="range"
            min="-100"
            max="100"
            value={saturation}
            onChange={(e) => setSaturation(Number(e.target.value))}
            className="border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Lightness:</label>
          <input
            type="range"
            min="-100"
            max="100"
            value={lightness}
            onChange={(e) => setLightness(Number(e.target.value))}
            className="border p-2"
          />
        </div>
        <button
          className="bg-blue-500 text-sm text-white px-4 py-2 rounded"
          onClick={generatePalette}
        >
          Generate Palette
        </button>
        {palette.length > 0 && (
          <div className="mt-4">
            <p className="font-bold">Color Palette:</p>
            <div className="flex mt-2">
              {palette.map(({ hexCode, color }, index) => (
                <div key={index} className="w-1/5 h-16 bg-gray-200" style={{ backgroundColor: hexCode }}>
                  <p className="text-xs mt-1 text-center">{hexCode}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <div className=' flex flex-col container mx-auto gap-y-8 pt-8  max-w-3xl'>
        <p className='text-base font-medium'>
        Unlock the potential of your creativity with our Color Palette Generator. As the digital world continues to evolve, the importance of visual appeal cannot be overstated. Whether you're a seasoned designer or an aspiring artist, the ability to create captivating color schemes is a valuable skill. Our tool empowers you to explore a spectrum of possibilities, from subtle gradients to bold contrasts. With just a few clicks, you can experiment with different base colors, saturations, and lightness levels, discovering combinations that resonate with your unique vision. Say goodbye to tedious manual adjustments and hello to effortless inspiration. No matter the project—whether you're designing a website, crafting a logo, or beautifying your social media feed—our Color Palette Generator is your gateway to stunning visuals that leave a lasting impression.
        </p>
        <p className='text-base font-medium'>In today's competitive landscape, standing out is essential. Our Color Palette Generator provides you with the edge you need to captivate your audience. Studies have shown that color plays a crucial role in brand perception and consumer behavior. By harnessing the power of color psychology, you can evoke emotions, convey messages, and establish a memorable identity. Our tool allows you to tailor your color palettes to align perfectly with your brand personality and target audience preferences. Whether you're aiming for a minimalist aesthetic or a vibrant, dynamic look, our Color Palette Generator equips you with the tools to achieve your goals. Elevate your brand presence, increase engagement, and leave a lasting impression with visually striking color schemes that speak volumes about who you are and what you stand for.</p>
      </div>
    </div>
  );
};

export default ColorPaletteGenerator;
