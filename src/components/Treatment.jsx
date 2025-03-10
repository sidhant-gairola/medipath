import { useState } from "react";
import { motion } from 'framer-motion';


function Treatment({ darkMode }) {
  const [symptoms, setSymptoms] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [currentCondition, setCurrentCondition] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const [fetchedData, setFetchedData] = useState(null); // New state for fetched data

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true

    const requestBody = {
      symptoms,
      medicalHistory,
      currentCondition
    };

    try {
      const response = await fetch('https://medipath-chi.vercel.app/treatment', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      setFetchedData(responseData);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="pb-20 mt-11 mb-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-4xl font-extrabold mb-6 text-center ${darkMode ? 'text-white ' : 'text-black'}`}>Symptom Analysis</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
                Describe your symptoms:
              </label>
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Enter your symptoms here..."
                required
              />
            </div>

            <div>
              <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
                Medical History:
              </label>
              <textarea
                value={medicalHistory}
                onChange={(e) => setMedicalHistory(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Enter your medical history (allergies, past illnesses, surgeries, etc.)..."
                required
              />
            </div>

            <div>
              <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
                Current Medical Conditions:
              </label>
              <textarea
                value={currentCondition}
                onChange={(e) => setCurrentCondition(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Enter any current medical conditions (diabetes, hypertension, etc.)..."
                required
              />
            </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-800 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-900 transition-colors"

              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? "Loading your treatment plan, please wait.." : "Get Treatment Plan"} {/* Change button text */}
            </button>
          </form>
        </motion.div>

        {fetchedData && (
          <div className="mt-4">
            <h3 className="text-xl text-center mt-16 mb-6 font-bold">Treatment Plan:</h3>
            <p className="whitespace-pre-line">{fetchedData.generatedText.replace(/\*/g, '')}</p>
            <p className="text-gray-500 text-center mt-10">This is the treatment plan based on your input.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Treatment;
