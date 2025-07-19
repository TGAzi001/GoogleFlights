import React, { useState } from 'react';
import {
  Globe,
  MapPin,
  CreditCard,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('Popular destinations from Abuja');
  const [openDropdown, setOpenDropdown] = useState<'international' | 'explore' | null>(null);
  const [openExploreSub, setOpenExploreSub] = useState<string | null>(null);

  const toggleDropdown = (section: 'international' | 'explore') => {
    setOpenDropdown(prev => (prev === section ? null : section));
    if (section !== 'explore') setOpenExploreSub(null); // Reset sub if switching
  };

  const toggleExploreSub = (label: string) => {
    setOpenExploreSub(prev => (prev === label ? null : label));
  };

  const tabContent = {
    'Popular destinations from Abuja': [
      'Flights from Abuja to London',
      'Flights from Abuja to New York',
      'Flights from Abuja to Osaka',
      'Flights from Abuja to Dubai',
      'Flights from Abuja to Chicago',
      'Flights from Abuja to New Delhi',
      'Flights from Abuja to Toronto',
      'Flights from Abuja to Tokyo',
      'Flights from Abuja to Milan',
      'Flights from Abuja to Paris',
      'Flights from Abuja to Shanghai',
      'Flights from Abuja to Frankfurt am Main',
      'Flights from Abuja to Singapore',
      'Flights from Abuja to Rome',
      'Flights from Abuja to Washington',
      'Flights from Abuja to Lagos',
      'Flights from Abuja to Istanbul',
      'Flights from Abuja to Mumbai',
      'Flights from Abuja to Cairo',
      'Flights from Abuja to Vienna',
    ],
    'Flights from other cities': [
      'Flights from Warri to London',
      'Flights from Benin City to London',
      'Flights from Jos to London',
      'Flights from Kaduna to London',
      'Flights from Maiduguri to London',
      'Flights from Uyo to London',
      'Flight from Flights from Lagos to London',
      'Flights from Lagos to New York',
      'Flights from Lagos to Dubai',
    ],
    'Flights to Abuja': ['Flights to Abuja'],
  };

  const tabs = [
    'Popular destinations from Abuja',
    'Flights from other cities',
    'Flights to Abuja',
  ];

  return (
    <footer className="w-full max-w-4xl lg:px-1 py-6 mx-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search More Flights Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-normal text-gray-900 mb-8">
            Search more flights
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-normal text-gray-900 mb-6">
              More places to fly
            </h3>

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-1 mb-6 border-b border-gray-200">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm font-medium transition-colors relative ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
              {tabContent[activeTab].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-blue-600 hover:underline text-sm py-1 block"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="border-t  border-gray-200 pt-8 mb-8">

          <div className="flex flex-wrap gap-8 justify-center items-center">

            <div className="flex justify-center bg-white">
  <button className="flex items-center gap-2 border border-gray-300 text-blue-600 text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-50 transition-colors">
    <Globe className="w-4 h-4 text-blue-600" />
    <span>Language.</span>
    <span>English (United States)</span>
  </button>
</div>


            <div className="flex justify-center bg-white ">
             <button className="flex items-center gap-2 border border-gray-300 text-blue-600 text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-50 transition-colors">
                <MapPin className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm">Location . </span>
              <span className="text-blue-600 text-sm">Nigeria</span>
              </ button>
            </div>

              

            <div className="flex justify-center bg-white ">
              <button className="flex items-center gap-2 border border-gray-300 text-blue-600 text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-50 transition-colors">
                <CreditCard className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 text-sm">Currency . </span>
                <span className="text-blue-600 text-sm">NGN</span>
              </ button>
            </div>

           

          </div>
        </div>

        {/* Currency Notice */}
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm mb-2">
            Current language and currency options applied: English (United States) - Nigeria - NGN
          </p>
          <p className="text-gray-600 text-sm">
            Displayed currencies may differ from the currencies used to purchase flights.{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Learn more
            </a>
          </p>
        </div>

        {/* Footer Links */}
            <div className="mt-8 mb-6  pt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-blue-600">
  <a href="#" className="hover:underline">About</a>
  <a href="#" className="hover:underline">Privacy</a>
  <a href="#" className="hover:underline">Terms</a>
  <a href="#" className="hover:underline">Join user studies</a>
  <a href="#" className="hover:underline">Feedback</a>
  <a href="#" className="hover:underline">Help Center</a>
</div>


        {/* Bottom Dropdowns */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-wrap justify-center gap-10">
            <div
              className="flex items-center gap-2 text-blue-600 cursor-pointer hover:underline"
              onClick={() => toggleDropdown('international')}
            >
              <span className="text-sm">International sites</span>
              {openDropdown === 'international' ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </div>

            <div
              className="flex items-center gap-2 text-blue-600 cursor-pointer hover:underline"
              onClick={() => toggleDropdown('explore')}
            >
              <span className="text-sm">Explore flights</span>
              {openDropdown === 'explore' ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </div>
          </div>

          {/* International Dropdown Content */}
          {openDropdown === 'international' && (
            <div className="mt-4 flex flex-col items-center text-sm text-blue-600 space-y-1">
              <span>Google Flights - United States (en-US)</span>
              <span>Google Voos - Brasil (pt-BR)</span>
              <span>Google Flights - Canada (en)</span>
              <span>Google Flights - United Kingdom (en-GB)</span>
              <span>Google Flights - India (en)</span>
              <span>Google Flights - France (fr)</span>
              <span>Google Flüge - Deutschland (de)</span>
              <span>Google Vuelos - España (es)</span>
              <span>Google Flights - Australia (en)</span>
              <span>Google Flights - México (es)</span>
            </div>
          )}

          {/* Explore Dropdown Content */}
          {openDropdown === 'explore' && (
            <div className="mt-4 flex flex-col items-center text-sm text-gray-600 space-y-3">
              {[
                'Popular departures from Nigeria',
                'Popular routes from Nigeria',
                'Popular destinations from Nigeria',
                'Popular regions from Nigeria',
              ].map(label => (
                <div key={label} className="w-full max-w-xs">
                  <div
                    className="flex justify-between items-center cursor-pointer hover:underline text-blue-600"
                    onClick={() => toggleExploreSub(label)}
                  >
                    <span>{label}</span>
                    {openExploreSub === label ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                  {openExploreSub === label && (
                    <ul className="mt-2 ml-4 list-disc text-blue-500 space-y-1 text-sm">
                      <ul>Flights from Lagos</ul>
                      <ul>Flights from Abuja</ul>
                      <ul>Flights from Port Harcourt</ul>
                       <ul>Flights from Port Kano</ul>
                        <ul>Flights from Port Asaba</ul>
                         <ul>Flights from Port Enugu</ul>
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
