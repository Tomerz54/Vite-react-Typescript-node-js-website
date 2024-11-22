import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">PathFinder Academy</span>
            </div>
            <p className="mt-4 text-gray-600">
              Discover your perfect career path through personalized assessment and guided learning.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/assessment" className="text-gray-600 hover:text-indigo-600">
                  Career Assessment
                </Link>
              </li>
              <li>
                <Link to="/certification" className="text-gray-600 hover:text-indigo-600">
                  Certification
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} PathFinder Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}