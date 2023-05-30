import React, { useState } from 'react';
import flowerImage1 from './flower1.png'; 
import flowerImage2 from './flower2.png';
import flowerImage3 from './flower3.png';

function ReflectionsPage(props) {
  const [inputValue, setInputValue] = useState('');
  const [reflections, setReflections] = useState([
    { text: "Geometry is not great, but I'll keep practicing!", date: '2023-04-19', flowerImage: flowerImage1 },
    { text: "Got 70% on geometry, I'm focusing on algebra now which is 65%", date: '2023-05-10', flowerImage: flowerImage2 },
  ]);

  const flowerImages = [flowerImage1, flowerImage2, flowerImage3];

  const saveReflection = () => {
    const selectedFlowerImage = flowerImages[Math.floor(Math.random() * flowerImages.length)];

    const newReflection = {
      text: inputValue,
      date: new Date().toLocaleDateString(),
      flowerImage: selectedFlowerImage,
    };

    setReflections([...reflections, newReflection]);
    setInputValue('');
  };

  return (
    <div>
      <h1>Here are your past reflections</h1>

      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Write your reflection here"
      />
      <button onClick={saveReflection}>Save</button>

      <section>
        <h2>Saved Reflections</h2>
        {reflections.length === 0 ? (
          <p>No reflections saved yet.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {reflections.map((reflection, index) => (
              <li
                key={index}
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  padding: '10px',
                  marginBottom: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ marginRight: '10px' }}>
                  <span style={{ fontWeight: 'bold' }}>Reflection {index + 1}:</span>
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontWeight: 'bold' }}>Date: </span>
                  <span>{reflection.date}</span>
                  <br />
                  <span style={{ fontWeight: 'bold' }}>Reflection: </span>
                  <span>{reflection.text}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span>Flower Progress:</span>
                  <img src={reflection.flowerImage} alt="flower" style={{ width: '30px', marginLeft: '10px' }} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default ReflectionsPage;


