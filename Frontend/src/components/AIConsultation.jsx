import { useState } from "react";

const AIConsultation = () => {
  const [userInput, setUserInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isResponseVisible, setIsResponseVisible] = useState(false);

  const getAIAdvice = () => {
    if (!userInput.trim()) {
      alert("Please enter your skin concerns.");
      return;
    }
    setAiResponse("Analyzing your concerns... (AI response coming soon!)");
    setIsResponseVisible(true);
  };

  return (
    <section id="aiConsultation" className="p-10 text-center">
      <h2 className="text-4xl font-bold text-pink-500">Start Your AI Consultation</h2>
      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="mt-4 w-2/3 p-3 border rounded-lg text-black"
        placeholder="Describe your skin issues..."
      ></textarea>
      <br />
      <button
        onClick={getAIAdvice}
        className="mt-4 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600"
      >
        Get AI Advice
      </button>
      {isResponseVisible && (
        <div className="mt-6 text-lg font-semibold text-gray-700">{aiResponse}</div>
      )}
    </section>
  );
};

export default AIConsultation;