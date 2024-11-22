import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { BookOpen, Award, TrendingUp, ChevronRight } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export default function Dashboard() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
        <p className="mt-2 text-gray-600">Track your progress and continue your learning journey.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Learning Progress */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Your Learning Path</h2>
            <BookOpen className="h-6 w-6 text-indigo-600" />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm font-medium mb-1">
                <span>Course Progress</span>
                <span>60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
            >
              Continue Learning
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Certification Progress */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Certification</h2>
            <Award className="h-6 w-6 text-indigo-600" />
          </div>
          <p className="text-gray-600 mb-4">Complete your courses to unlock the certification exam.</p>
          <Link
            to="/certification"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
          >
            View Requirements
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Skills Progress */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Skills Progress</h2>
            <TrendingUp className="h-6 w-6 text-indigo-600" />
          </div>
          <div className="space-y-3">
            {['HTML/CSS', 'JavaScript', 'React'].map((skill) => (
              <div key={skill}>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span>{skill}</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {[
              { action: 'Completed Module', item: 'Introduction to React', date: '2 days ago' },
              { action: 'Started Course', item: 'Advanced JavaScript Concepts', date: '1 week ago' },
              { action: 'Earned Badge', item: 'JavaScript Fundamentals', date: '2 weeks ago' }
            ].map((activity, index) => (
              <li key={index}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      {activity.action}: {activity.item}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {activity.date}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}