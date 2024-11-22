import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { ChevronRight, CheckCircle } from 'lucide-react';

const questions = [
  {
    id: 1,
    text: "When solving problems, I prefer to:",
    options: [
      { text: "Break them down into logical steps", field: "technology" },
      { text: "Find creative and innovative solutions", field: "design" },
      { text: "Analyze data and patterns", field: "data_science" },
      { text: "Consider their impact on people", field: "business" }
    ]
  },
  {
    id: 2,
    text: "I am most interested in:",
    options: [
      { text: "Building and creating things", field: "technology" },
      { text: "Visual communication and aesthetics", field: "design" },
      { text: "Understanding trends and patterns", field: "data_science" },
      { text: "Leading and managing projects", field: "business" }
    ]
  },
  {
    id: 3,
    text: "In a team project, I naturally take the role of:",
    options: [
      { text: "Technical problem solver", field: "technology" },
      { text: "Creative director", field: "design" },
      { text: "Data analyst", field: "data_science" },
      { text: "Project coordinator", field: "business" }
    ]
  },
  // Add more questions as needed
];

const fieldDescriptions = {
  technology: {
    title: "Software Development",
    description: "You show a strong aptitude for logical thinking and problem-solving. A career in software development would allow you to create innovative solutions and build the future of technology.",
    courses: [
      { name: "Full-Stack Web Development", platform: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
      { name: "CS50: Introduction to Computer Science", platform: "Harvard", url: "https://cs50.harvard.edu/x/" },
      { name: "The Odin Project", platform: "The Odin Project", url: "https://www.theodinproject.com/" }
    ]
  },
  design: {
    title: "UX/UI Design",
    description: "Your creative thinking and visual communication skills make you well-suited for a career in UX/UI design. You can shape how users interact with digital products.",
    courses: [
      { name: "Google UX Design Professional Certificate", platform: "Coursera", url: "https://www.coursera.org/professional-certificates/google-ux-design" },
      { name: "UI Design", platform: "Dribbble", url: "https://dribbble.com/learn" },
      { name: "Design Principles", platform: "Interaction Design Foundation", url: "https://www.interaction-design.org/" }
    ]
  },
  data_science: {
    title: "Data Science",
    description: "Your analytical mindset and interest in patterns suggest a strong fit for data science. You can help organizations make data-driven decisions.",
    courses: [
      { name: "Data Science Specialization", platform: "Coursera", url: "https://www.coursera.org/specializations/jhu-data-science" },
      { name: "Machine Learning", platform: "Stanford Online", url: "https://www.coursera.org/learn/machine-learning" },
      { name: "Python for Data Science", platform: "edX", url: "https://www.edx.org/professional-certificate/python-data-science" }
    ]
  },
  business: {
    title: "Product Management",
    description: "Your people skills and project coordination abilities align well with product management. You can bridge the gap between technical teams and business objectives.",
    courses: [
      { name: "Digital Product Management", platform: "edX", url: "https://www.edx.org/professional-certificate/product-management" },
      { name: "Agile with Atlassian Jira", platform: "Coursera", url: "https://www.coursera.org/learn/agile-atlassian-jira" },
      { name: "Product Management Fundamentals", platform: "Product School", url: "https://productschool.com/" }
    ]
  }
};

export default function Assessment() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);
  
  const handleAnswer = (field: string) => {
    const newAnswers = [...answers, field];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate most frequent field
      const fieldCounts = newAnswers.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      
      const recommendedField = Object.entries(fieldCounts).reduce((a, b) => 
        fieldCounts[a[0]] > fieldCounts[b[0]] ? a : b
      )[0];
      
      setResult(recommendedField);
    }
  };

  if (result) {
    const fieldInfo = fieldDescriptions[result as keyof typeof fieldDescriptions];
    
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white shadow rounded-lg p-8">
          <div className="text-center mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Assessment Complete!</h2>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">
              Recommended Path: {fieldInfo.title}
            </h3>
            <p className="text-gray-600 mb-6">{fieldInfo.description}</p>
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Recommended Learning Resources</h4>
            <div className="space-y-4">
              {fieldInfo.courses.map((course, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h5 className="font-medium text-gray-900">{course.name}</h5>
                  <p className="text-gray-500 text-sm mb-2">Platform: {course.platform}</p>
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                  >
                    Start Learning →
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Go to Dashboard
              <ChevronRight className="ml-2 h-5 w-5" />
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
            <h2 className="text-2xl font-bold text-gray-900">Career Assessment</h2>
            <span className="text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            {questions[currentQuestion].text}
          </h3>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.field)}
                className="w-full text-left p-4 border rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}