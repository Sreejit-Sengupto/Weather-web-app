import React from "react";
import cities from "cities.json";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";

function Search({setLat, setLng }) {
  const [input, setInput] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [showSuggestionBox, setShowSuggestionBox] = React.useState(false);
  const overlayRef = React.useRef(null);

  function handleChange(event) {
    setInput(event.target.value);
    showSuggestion(event.target.value);
  }

  function showSuggestion(input) {
    setShowSuggestionBox(true);
    const filteredCities = cities.filter(
      (item) => item.name.toLowerCase() == input.toLowerCase()
    );
    setSuggestions(filteredCities);
  }

  function handleSelection(city) {
    setInput(city.name);
    setLat(city.lat)
    setLng(city.lng)
    setShowSuggestionBox(false);
  }

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setShowSuggestionBox(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={overlayRef}>
      <InputGroup>
        <InputLeftElement pointerEvents={"none"}>
          <BsSearch className="text-white" />
        </InputLeftElement>
        <Input
          placeholder="Search location"
          className="font-raleway"
          borderRadius={"2px"}
          value={input}
          onChange={handleChange}
          color={'#E7E7EB'}
        />
      </InputGroup>
      {showSuggestionBox && (
        <div>
          {suggestions.map((item) => {
            return (
              <p
                key={item.lat}
                className="text-[#E7E7EB] my-2 border-2 px-3 py-2 flex justify-between items-center cursor-pointer"
                onClick={() => {
                  handleSelection(item);
                }}
              >
                {item.name}, {item.country}
                <BiChevronRight />
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
