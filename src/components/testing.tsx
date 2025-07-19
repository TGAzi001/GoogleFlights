import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FooterDropdowns = () => {
  const [openSection, setOpenSection] = useState<"international" | "explore" | null>(null);
  const [openExploreSub, setOpenExploreSub] = useState<string | null>(null);

  const toggleSection = (section: "international" | "explore") => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  const toggleExploreSub = (label: string) => {
    setOpenExploreSub(prev => (prev === label ? null : label));
  };

  return (
    <div className="w-full max-w-4xl lg:px-1 py-6 mx-auto">
      {/* Bottom Dropdown Headers */}
      <div className="flex flex-wrap justify-center gap-10">
        <div
          className="flex items-center gap-2 text-blue-600 cursor-pointer hover:underline"
          onClick={() => toggleSection("international")}
        >
          <span className="text-sm">International sites</span>
          {openSection === "international" ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </div>

        <div
          className="flex items-center gap-2 text-blue-600 cursor-pointer hover:underline"
          onClick={() => toggleSection("explore")}
        >
          <span className="text-sm">Explore flights</span>
          {openSection === "explore" ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </div>
      </div>

      {/* International Sites Dropdown */}
      {openSection === "international" && (
        <div className="mt-4 flex flex-col items-left text-sm text-blue-600 space-y-1">
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

      {/* Explore Flights Dropdown */}
      {openSection === "explore" && (
        <div className="mt-4 flex flex-col items-left text-sm text-gray-600 space-y-3">
          {[
            "Popular departures from Nigeria",
            "Popular routes from Nigeria",
            "Popular destinations from Nigeria",
            "Popular regions from Nigeria",
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
                <ul className="mt-2 ml-2 text-gray-500 list-disc text-sm space-y-1">
                  <li>Sample sublink 1</li>
                  <li>Sample sublink 2</li>
                  <li>Sample sublink 3</li>
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FooterDropdowns;




 <div className={`w-full max-w-4xl lg:px-1 py-6 mx-auto ${className}`}></div>