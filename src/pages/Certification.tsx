import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const certificationQuestions = [
  {
    id: 1,
    question: "What is the primary purpose of React's virtual DOM?",
    options: [
      "To directly manipulate the browser's DOM",
      "To improve performance by minimizing actual DOM updates",
      "To store component state",
      "To handle routing in React applications"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which hook is used to perform side effects in React components?",
    options: [
      "useState",
      "useReducer",
      "useEffect",
      "useContext"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "What is the purpose of the key prop in React lists?",
    options: [
      "To style list items",
      "To help React track which items have changed",
      "To set the order of list items",
      "To make lists searchable"
    ],
    correctAnswer: 1
  }
];

export default function Certification() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < certificationQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      const correctAnswers = newAnswers.filter(
        (answer, index) => answer === certificationQuestions[index].correctAnswer
      ).length;
      setScore((correctAnswers / certificationQuestions.length) * 100);
      setShowResults(true);
    }
  };

  if (showResults) {
    const passed = score >= 70;

    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white shadow rounded-lg p-8 text-center">
          {passed ? (
            <>
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              <h2 className="mt-4 text-3xl font-bold text-gray-900">Congratulations!</h2>
              <p className="mt-2 text-lg text-gray-600">
                You've passed the certification with a score of {score}%
              </p>
              <p className="mt-4 text-gray-600">
                Your certification badge has been added to your profile.
              </p>
            </>
          ) : (
            <>
              <AlertCircle className="h-16 w-16 text-red-500 mx-auto" />
              <h2 className="mt-4 text-3xl font-bold text-gray-900">Keep Learning</h2>
              <p className="mt-2 text-lg text-gray-600">
                You scored {score}%. 70% is required to pass.
              </p>
              <p className="mt-4 text-gray-600">
                Review your learning materials and try again when you're ready.
              </p>
            </>
          )}
          
          <div className="mt-8">
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setAnswers([]);
                setShowResults(false);
              }}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              {passed ? 'Take Advanced Certification' : 'Try Again'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white shadow rounded-lg p-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Certification Exam</h2>
            <span className="text-gray-500">
              Question {currentQuestion + 1} of {certificationQuestions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / certificationQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            {certificationQuestions[currentQuestion].question}
          </h3>
          <div className="space-y-4">
            {certificationQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full text-left p-4 border rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}