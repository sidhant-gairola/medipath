import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgimage1 from '../Images/MediPath1.jpg';
import bgimage2 from '../Images/MediPath2.png';

function Home({ darkMode }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [showTreatment, setShowTreatment] = useState(false);
  const [currentImage, setCurrentImage] = useState(bgimage1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage === bgimage1 ? bgimage2 : bgimage1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto mb-10">
      <img src={currentImage} alt="Top Image" className={`w-full h-auto mb-4 ${darkMode ? 'filter brightness-75' : ''}`} />
      <h2 className="text-4xl font-extrabold text-center mb-5 mt-12"> How It Works? </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black flex-wrap px-4 md:px-10">
        {[
          {
            title: "Symptom Analysis",
            description: "Input your symptoms and medical history for AI analysis"
          },
          {
            title: "AI Diagnosis",
            description: "Advanced AI algorithms analyze your condition"
          },
          {
            title: "Treatment Plan",
            description: "Receive personalized treatment recommendations"
          }
        ].map((item, index) => (
          <div key={index} className="p-6 bg-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="items-center justify-center text-center text-black px-4">
        <p className={`text-xl mb-6 mt-10 ${darkMode ? 'text-white' : 'text-black'}`}>AI-powered healthcare solutions for personalized treatment recommendations</p>
        <button onClick={() => navigate('/treatment')} className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full mx-auto hover:from-blue-600 hover:to-blue-800 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
