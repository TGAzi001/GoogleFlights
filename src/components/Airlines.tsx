import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plane } from 'lucide-react';

interface FlightRoute {
  destination: string;
  frequency: string;
  duration: string;
}

interface Airline {
  id: string;
  name: string;
  subtitle: string;
  routes: FlightRoute[];
  exploreLink: string;
}

interface AirlinesProps {
  className?: string;
}

const Airlines: React.FC<AirlinesProps> = ({ className = '' }) => {
  // Changed from array to single string to allow only one accordion open at a time
  const [expandedAirline, setExpandedAirline] = useState<string | null>(null);

  const airlines: Airline[] = [
    {
      id: 'air-peace',
      name: 'Air Peace',
      subtitle: 'Fly from Abuja (ABV)',
      routes: [
        { destination: 'Lagos', frequency: 'Direct flights every day', duration: '1 hr 20 min' },
        { destination: 'Asaba', frequency: 'Direct flights every day', duration: '1 hr' },
        { destination: 'Benin City', frequency: 'Direct flights every day', duration: '1 hr' },
        { destination: 'Enugu', frequency: 'Direct flights every day', duration: '55 min' },
        { destination: 'Owerri', frequency: 'Direct flights every day', duration: '1 hr 10 min' },
      ],
      exploreLink: 'Explore all Air Peace flights'
    },
    {
      id: 'aero-nigeria',
      name: 'Aero Nigeria',
      subtitle: 'Fly from Abuja (ABV)',
      routes: [
        { destination: 'Lagos', frequency: 'Direct flights every day', duration: '1 hr 15 min' },
        { destination: 'Sokoto', frequency: 'Direct flights every Mon, Wed, Thu, Fri, Sat, Sun', duration: '1 hr 10 min' },
        { destination: 'Port Harcourt', frequency: 'Direct flights every Mon, Tue, Wed, Fri, Sun', duration: '1 hr 10 min' },
        { destination: 'Yola', frequency: 'Direct flights every Mon, Wed, Fri, Sat', duration: '1 hr 10 min' },
        { destination: 'Calabar', frequency: 'Direct flights every Mon, Wed, Fri', duration: '1 hr 10 min' },
      ],
      exploreLink: 'Explore all Aero Nigeria flights'
    },
    {
      id: 'united-nigeria',
      name: 'United Nigeria Airlines',
      subtitle: 'Fly from Abuja (ABV)',
      routes: [
        { destination: 'Lagos', frequency: 'Direct flights every Mon, Tue, Wed, Thu, Fri, Sun', duration: '1 hr' },
        { destination: 'Asaba', frequency: 'Direct flights every Mon, Tue, Thu, Fri, Sat, Sun', duration: '1 hr' },
        { destination: 'Owerri', frequency: 'Direct flights every Tue, Thu, Fri, Sat, Sun', duration: '1 hr' },
        { destination: 'Enugu', frequency: 'Direct flights every Tue, Wed, Thu, Sat, Sun', duration: '1 hr' },
        { destination: 'Benin City', frequency: 'Direct flights every Mon, Wed, Thu', duration: '1 hr' },
      ],
      exploreLink: 'Explore all United Nigeria Airlines flights'
    },
    {
      id: 'rano-air',
      name: 'Rano Air',
      subtitle: 'Fly from Abuja (ABV)',
      routes: [
        { destination: 'Kano', frequency: 'Direct flights every day', duration: '50 min' },
        { destination: 'Lagos', frequency: 'Direct flights every day', duration: '1 hr 10 min' },
        { destination: 'Sokoto', frequency: 'Direct flights every Mon, Tue, Wed, Thu, Fri, Sun', duration: '1 hr 10 min' },
        { destination: 'Maiduguri', frequency: 'Direct flights every Mon, Tue, Wed, Thu, Fri, Sun', duration: '1 hr 20 min' },
        { destination: 'Katsina', frequency: 'Direct flights every Tue, Thu, Fri, Sun', duration: '50 min' },
      ],
      exploreLink: 'Explore all Rano Air flights'
    },
    {
      id: 'ibom-air',
      name: 'Ibom Air',
      subtitle: 'Fly from Abuja (ABV)',
      routes: [
        { destination: 'Lagos', frequency: 'Direct flights every day', duration: '1 hr 15 min' },
        { destination: 'Port Harcourt', frequency: 'Direct flights every day', duration: '1 hr 10 min' },
        { destination: 'Calabar', frequency: 'Direct flights every Mon, Wed, Fri, Sun', duration: '1 hr 10 min' },
        { destination: 'Uyo', frequency: 'Direct flights every day', duration: '1 hr 15 min' },
      ],
      exploreLink: 'Explore all Ibom Air flights'
    },
    {
      id: 'overland-airways',
      name: 'Overland Airways',
      subtitle: 'Fly from Abuja (ABV)',
      routes: [
        { destination: 'Lagos', frequency: 'Direct flights every day', duration: '1 hr 20 min' },
        { destination: 'Ilorin', frequency: 'Direct flights every Mon, Wed, Fri', duration: '45 min' },
        { destination: 'Kaduna', frequency: 'Direct flights every Tue, Thu, Sat', duration: '30 min' },
        { destination: 'Minna', frequency: 'Direct flights every Mon, Wed, Fri', duration: '25 min' },
      ],
      exploreLink: 'Explore all Overland Airways flights'
    }
  ];

  // Updated toggle function to handle single accordion open
  const toggleAirline = (airlineId: string) => {
    setExpandedAirline(prev => prev === airlineId ? null : airlineId);
  };

  return (
    <div className={`w-full max-w-4xl lg:px-1 py-6 mx-auto ${className}`}>

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-1xl md:text-3xl font-normal text-gray-800 mb-2">
          Popular airlines with direct flights from Abuja
        </h2>
      </div>

      {/* Airlines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {airlines.map((airline) => {
          // Updated to check against single expanded airline
          const isExpanded = expandedAirline === airline.id;
          
          return (
            <div
              key={airline.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAirline(airline.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Plane className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {airline.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {airline.subtitle}
                    </p>
                  </div>
                </div>
                <div className="text-gray-400">
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Accordion Content */}
              {isExpanded && (
                <div className="border-t border-gray-100">
                  <div className="p-6 pt-4">
                    {/* Routes List */}
                    <div className="space-y-4">
                      {airline.routes.map((route, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2"
                        >
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 mb-1">
                              {route.destination}
                            </div>
                            <div className="text-sm text-gray-600">
                              {route.frequency}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium text-gray-900">
                              {route.duration}
                            </div>
                            <div className="text-sm text-gray-500">
                              +
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Explore Link */}
              <div className="mt-4 pt-4 border-t border-gray-200 flex justify-center bg-white">
                <button className="border border-gray-300 text-blue-600 text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-50 transition-colors">
                  {airline.exploreLink}
                </button>
              </div>
                    
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Airlines;

