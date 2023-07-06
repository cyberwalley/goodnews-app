import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const PrivacyBanner = () => {
  const [showBanner, setShowBanner] = useState(!Cookies.get('GetCrazyOffersCookieConsent'));

  const handleAccept = () => {
    Cookies.set('GetCrazyOffersCookieConsent', 'true', { expires: 365 });
    setShowBanner(false);
  };

  const handleDecline = () => {
    Cookies.remove('cookieConsent');
    setShowBanner(false);
  };
  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white py-5 px-4 flex flex-col md:flex-row items-center justify-between">
          <p>
            By using this website, you agree to our{' '}
            <Link
              to="/pages/terms"
              className="underline font-bold hover:text-gray-400"
            >
              Terms of service
            </Link>{' '}
            and{' '}
            <Link
              to="/pages/privacy"
              className="underline font-bold hover:text-gray-400"
            >
              Learn more
            </Link>
          </p>
          <div className="flex mt-5 mb-5 md:mt-0 md:mb-0 space-x-4">
            <button
              onClick={handleAccept}
              className="bg-white text-gray-900 py-2 px-4 rounded"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="bg-gray-400 text-white py-2 px-4 rounded"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
};

PrivacyBanner.displayName = 'PrivacyBanner';

export default PrivacyBanner;
