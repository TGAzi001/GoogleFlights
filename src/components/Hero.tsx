import type React from "react";
import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  ArrowLeftRight,
  Calendar,
  MapPin,
  Users,
  Plane,
  Search,
} from "lucide-react";
import { cn } from "../lib/utils"; // Assuming you have this utility
import PassengerDropdown from "./PassengerDropdown";

// Reusable Dropdown Component
interface CustomDropdownProps {
  label: string;
  icon: React.ElementType;
  options: string[] | number[];
  selectedValue: string | number;
  onSelect: (value: string | number) => void;
  formatValue?: (value: string | number) => string;
}

type StringDropdownProps = Omit<
  CustomDropdownProps,
  "options" | "selectedValue" | "onSelect"
> & {
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
  formatValue?: (value: string) => string;
};

function CustomDropdown({
  label,
  icon: Icon,
  options,
  selectedValue,
  onSelect,
  formatValue = (v) => String(v),
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (cd googleFlights
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className = "flex items-center gap-2 h-10 px-4 py-2 rounded-md bg-transparent text-gray-700 hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Icon className="w-4 h-4" />
        {formatValue(selectedValue)}
        <ChevronDown
          className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <div className="absolute z-20 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={String(option)}
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {formatValue(option)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  const [tripType, setTripType] = useState("Round trip");
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infantsInSeat: 0,
    infantsOnLap: 0,
  });
  const [ticketClass, setTicketClass] = useState("Economy");
  const [fromLocation, setFromLocation] = useState("Abuja");
  const [toLocation, setToLocation] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const tripTypes = ["Round trip", "One way", "Multi city"];
  const ticketClasses = ["Economy", "Premium Economy", "Business", "First"];

  const handleSwapLocations = () => {
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden flex flex-col items-center">
      {/* Background Image and Image Overlay */}

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: "url('/assets/heroImg.jpeg')" }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-800 mb-4">
            Flights
          </h1>
        </div>

        {/* Search Form */}
        <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 md:p-8">
          {/* Top Controls */}
          <div className="flex flex-wrap gap-4 mb-6">
            {/* Trip Type Dropdown */}
            <CustomDropdown
              label="Trip Type"
              icon={ArrowLeftRight}
              options={tripTypes}
              selectedValue={tripType}
              onSelect={(value) => setTripType(value as string)}
            />

            {/* Passengers Dropdown */}
            <PassengerDropdown
              initialPassengers={passengers}
              onConfirm={setPassengers}
            />

            {/* Ticket Class Dropdown */}
            <CustomDropdown
              label="Ticket Class"
              icon={Plane}
              options={ticketClasses}
              selectedValue={ticketClass}
              onSelect={(value) => setTicketClass(value as string)}
            />
          </div>

          {/* Location and Date Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Origin and Destination Inputs Group */}
            <div className="md:col-span-2 flex border border-gray-300 rounded-lg overflow-hidden">
              {/* Origin Input */}
              <div className="flex-1 flex items-center gap-3 p-4">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div className="flex-1">
                  <input
                    type="text"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    placeholder="Where from?"
                    className="w-full text-gray-800 placeholder-gray-500 bg-transparent border-none outline-none text-lg"
                  />
                </div>
              </div>

              {/* Swap Button and Separator */}
              <div className="relative flex items-center justify-center w-12">
                <div className="absolute h-full w-px bg-gray-300 left-0"></div>
                <button
                  type="button"
                  onClick={handleSwapLocations}
                  className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors bg-white border border-gray-300"
                  aria-label="Swap origin and destination"
                >
                  <ArrowLeftRight className="w-5 h-5" />
                </button>
                <div className="absolute h-full w-px bg-gray-300 right-0"></div>
              </div>

              {/* Destination Input */}
              <div className="flex-1 flex items-center gap-3 p-4">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div className="flex-1">
                  <input
                    type="text"
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    placeholder="Where to?"
                    className="w-full text-gray-800 placeholder-gray-500 bg-transparent border-none outline-none text-lg"
                  />
                </div>
              </div>
            </div>

            {/* Date Inputs Group */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Departure Date */}
              <div className="relative">
                <div className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg hover:border-blue-500 focus-within:border-blue-500 transition-colors">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div className="flex-1">
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className={cn(
                        "w-full bg-transparent border-none outline-none",
                        departureDate ? "text-gray-800" : "text-transparent",
                      )}
                    />
                    {!departureDate && (
                      <span className="absolute left-12 top-4 text-gray-500 pointer-events-none">Departure</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Return Date */}
              {tripType === "Round trip" && (
                <div className="relative">
                  <div className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg hover:border-blue-500 focus-within:border-blue-500 transition-colors">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className={cn(
                          "w-full bg-transparent border-none outline-none",
                          returnDate ? "text-gray-800" : "text-transparent",
                        )}
                      />
                      {!returnDate && (
                        <span className="absolute left-12 top-4 text-gray-500 pointer-events-none">Return</span>
                      )}
                    </div>
                  </div>
                </div>
              )}

            </div>
            
          </div>

          {/* Search Button */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors shadow-md"
            >
              <Search className="w-5 h-5" />
              Explore
            </button>
          </div>
          
        </div>
        
      </div>

    </div>
  );
}
