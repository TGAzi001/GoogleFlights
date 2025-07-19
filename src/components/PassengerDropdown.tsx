import React, { useState, useEffect, useRef } from 'react';
import { Users } from 'lucide-react';

interface PassengerCounts {
  adults: number;
  children: number;
  infantsInSeat: number;
  infantsOnLap: number;
}

interface PassengerDropdownProps {
  initialPassengers: PassengerCounts;
  onConfirm: (counts: PassengerCounts) => void;
}

const PassengerDropdown: React.FC<PassengerDropdownProps> = ({ initialPassengers, onConfirm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [adults, setAdults] = useState(initialPassengers.adults || 1);
  const [children, setChildren] = useState(initialPassengers.children || 0);
  const [infantsInSeat, setInfantsInSeat] = useState(initialPassengers.infantsInSeat || 0);
  const [infantsOnLap, setInfantsOnLap] = useState(initialPassengers.infantsOnLap || 0);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleIncrement = (type: keyof PassengerCounts) => {
    switch (type) {
      case 'adults':
        setAdults(prev => prev + 1);
        break;
      case 'children':
        setChildren(prev => prev + 1);
        break;
      case 'infantsInSeat':
        setInfantsInSeat(prev => prev + 1);
        break;
      case 'infantsOnLap':
        setInfantsOnLap(prev => prev + 1);
        break;
      default:
        break;
    }
  };

  const handleDecrement = (type: keyof PassengerCounts) => {
    switch (type) {
      case 'adults':
        setAdults(prev => Math.max(1, prev - 1)); // Minimum 1 adult
        break;
      case 'children':
        setChildren(prev => Math.max(0, prev - 1));
        break;
      case 'infantsInSeat':
        setInfantsInSeat(prev => Math.max(0, prev - 1));
        break;
      case 'infantsOnLap':
        setInfantsOnLap(prev => Math.max(0, prev - 1));
        break;
      default:
        break;
    }
  };

  const handleCancel = () => {
    setAdults(initialPassengers.adults || 1);
    setChildren(initialPassengers.children || 0);
    setInfantsInSeat(initialPassengers.infantsInSeat || 0);
    setInfantsOnLap(initialPassengers.infantsOnLap || 0);
    setIsOpen(false);
  };

  const handleDone = () => {
    onConfirm({
      adults,
      children,
      infantsInSeat,
      infantsOnLap,
    });
    setIsOpen(false);
  };

  const totalPassengers = adults + children + infantsInSeat + infantsOnLap;

  interface CounterProps {
    label: string;
    subLabel?: string;
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
  }

  const Counter: React.FC<CounterProps> = ({ label, subLabel, count, onIncrement, onDecrement }) => (
    <div className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
      <div>
        <div className="font-medium text-gray-800">{label}</div>
        {subLabel && <div className="text-sm text-gray-500">{subLabel}</div>}
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onDecrement}
          className="p-2 rounded-full text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={count === (label === 'Adults' ? 1 : 0)}
        >
          -
        </button>
        <span className="w-6 text-center font-medium">{count}</span>
        <button
          type="button"
          onClick={onIncrement}
          className="p-2 rounded-full text-blue-600 hover:bg-blue-100"
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative w-full md:w-auto" ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg w-full justify-between hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Users className="w-5 h-5 text-gray-400" />
        <span className="flex-1 text-left text-gray-800">
          {totalPassengers} Passenger{totalPassengers > 1 ? 's' : ''}
        </span>
        <svg
          className={`w-4 h-4 text-gray-600 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl z-30 p-4">
          <Counter
            label="Adults"
            count={adults}
            onIncrement={() => handleIncrement('adults')}
            onDecrement={() => handleDecrement('adults')}
          />
          <Counter
            label="Children"
            subLabel="Aged 2-11"
            count={children}
            onIncrement={() => handleIncrement('children')}
            onDecrement={() => handleDecrement('children')}
          />
          <Counter
            label="Infants"
            subLabel="In seat"
            count={infantsInSeat}
            onIncrement={() => handleIncrement('infantsInSeat')}
            onDecrement={() => handleDecrement('infantsInSeat')}
          />
          <Counter
            label="Infants"
            subLabel="On lap"
            count={infantsOnLap}
            onIncrement={() => handleIncrement('infantsOnLap')}
            onDecrement={() => handleDecrement('infantsOnLap')}
          />

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 text-blue-600 rounded-md hover:bg-blue-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleDone}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengerDropdown;


