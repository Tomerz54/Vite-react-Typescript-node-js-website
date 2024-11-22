import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, BookOpen, Award, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Discover Your Perfect</span>
                  <span className="block text-indigo-600">Career Path</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Take our comprehensive assessment to find your ideal field of study, get personalized learning resources, and earn certifications to validate your expertise.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <Link
                    to="/register"
                    className="rounded-md shadow px-8 py-3 bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Start Your Journey
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-4/7">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="People working on laptops"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Compass className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Career Assessment</h3>
              <p className="mt-2 text-gray-500">
                Take our detailed assessment to discover your ideal career path based on your interests and strengths.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <BookOpen className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Personalized Learning</h3>
              <p className="mt-2 text-gray-500">
                Get access to curated learning resources tailored to your chosen field of study.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Award className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Certification</h3>
              <p className="mt-2 text-gray-500">
                Validate your expertise with our certification program and showcase your skills.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-white">5,000+</div>
              <div className="mt-2 text-lg font-medium text-indigo-100">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-white">50+</div>
              <div className="mt-2 text-lg font-medium text-indigo-100">Career Paths</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-white">95%</div>
              <div className="mt-2 text-lg font-medium text-indigo-100">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}