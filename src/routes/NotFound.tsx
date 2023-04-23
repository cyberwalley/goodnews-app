import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../global/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className=" h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-medium text-gray-800">404</h1>
          <p className="text-3xl font-medium text-gray-800">Page Not Found</p>
          <p className="text-gray-600">
            Sorry, the page you are looking for could not be found.
          </p>
          <div className="my-4">
            <Link to="/" className="text-blue-600 hover:underline">
              Go to Homepage
            </Link>
          </div>
          <div className="my-4">
            <h2 className="text-xl font-medium text-gray-800">Popular Pages</h2>
            <ul>
              <li className="text-gray-600">
                <Link to="/products" className="text-blue-600 hover:underline">
                  Products
                </Link>
              </li>
              <li className="text-gray-600">
                <Link to="/pages/about" className="text-blue-600 hover:underline">
                  About Us
                </Link>
              </li>
              <li className="text-gray-600">
                <Link to="/pages/contact" className="text-blue-600 hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

NotFound.displayName = 'NotFound';

export default NotFound;
