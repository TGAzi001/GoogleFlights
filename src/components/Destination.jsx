import React from "react";

interface Trip {
  image: string;
  city: string;
  price: string;
  date: string;
  details: string;
}

const trips: Trip[] = [
  {
    image: "/images/san-francisco.jpg",
    city: "San Francisco",
    price: "NGN 3,050,002",
    date: "Jul 24 — Jul 30",
    details: "2 stops · 37 hr 52 min · American, Qatar Airways",
  },
  {
    image: "/images/london.jpg",
    city: "London",
    price: "NGN 1,008,998",
    date: "Oct 24 — Oct 31",
    details: "1 stop · 8 hr 45 min · Royal Air Maroc",
  },
  {
    image: "/images/rome.jpg",
    city: "Rome",
    price: "NGN 1,913,274",
    date: "Jul 26 — Aug 1",
    details: "1 stop · 15 hr 20 min · Ethiopian",
  },
  {
    image: "/images/paris.jpg",
    city: "Paris",
    price: "NGN 2,092,162",
    date: "Jul 25 — Jul 31",
    details: "1 stop · 24 hr 10 min · Qatar Airways",
  },
  {
    image: "/images/new-york.jpg",
    city: "New York",
    price: "NGN 1,347,712",
    date: "Oct 5 — Oct 11",
    details: "1 stop · 16 hr 50 min · Royal Air Maroc",
  },
  {
    image: "/images/singapore.jpg",
    city: "Singapore",
    price: "",
    date: "Aug 14 — Aug 20",
    details: "",
  },
];

const Destination = () => {
  return (
    <section className="px-4 md:px-12 lg:px-20 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <nav className="text-sm text-gray-600 mb-2">
          <span className="text-blue-600 cursor-pointer hover:underline">Flights</span> &gt; <span className="text-gray-900">From Abuja</span>
        </nav>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">Cheap flights from Abuja</h2>
        <p className="text-lg font-medium text-gray-800 mb-6">Popular trips from Abuja</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trips.map((trip, index) => (
            <div key={index} className="flex gap-4">
              <img
                src={trip.image}
                alt={trip.city}
                className="w-36 h-24 md:w-44 md:h-28 object-cover rounded-xl"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{trip.city}</h3>
                  {trip.price && <p className="text-sm font-medium text-gray-800">{trip.price}</p>}
                </div>
                <p className="text-sm text-gray-600">{trip.date}</p>
                {trip.details && <p className="text-sm text-gray-500">{trip.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destination;
