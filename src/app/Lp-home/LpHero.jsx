"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import CustomButton from "../../Components/Button";
import CustomButton2 from "../../Components/Button2";
import FormPopUp from "@/Components/FormPopUp";

const cashdisplay = localFont({
  src: "../../fonts/ClashDisplay-Variable.ttf",
  variable: "--clashvariable",
});

const LpHero = () => {
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = (e) => {
    if (e.target.id === "popup-overlay") {
      setShowPopup(false);
    }
  };

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({
    flag: "/Images/flag.svg",
    code: "+971",
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const [showRegisterCountry, setRegisterCountry] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        // Extract country name, flag, and code, then sort alphabetically
        const sortedCountries = data
          .map((country) => ({
            name: country.name.common,
            flag: country.flags.svg,
            code:
              country.idd?.root +
              (country.idd?.suffixes ? country.idd.suffixes[0] : ""),
          }))
          .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

        setCountries(sortedCountries);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleSelectCountry = (country) => {
    setSelectedCountry({ flag: country.flag, code: country.code });
    setShowDropdown(false);
    setSearchTerm(country.name); // Set selected country in input
    console.log(searchTerm)
  };

  // === for registered countries ====
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const filteredCountries = countries.filter((item) =>
  //   item.nam.toString().toLowerCase().includes(item.name.toLowerCase())
  // );


  // === for registered countries ====
  return (
    <section id="home"
      className="relative w-full min-h-screen bg-cover bg-no-repeat sm:bg-center bg-left-top flex items-center justify-center md:mt-10 mt-20 px-4 sm:py-10 py-20"
      style={{ backgroundImage: "url('/Lpbg1.png')" }}
    >

      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-7xl ">
        {/* Card Section */}
        <div
          className="relative lg:left-10 md:left-9 hidden md:flex sm:gap-0 gap-10 flex-col justify-center items-center w-full lg:h-[500px] h-[400px] sm:w-1/2 max-w-md md:max-w-lg lg:max-w-xl p-6 md:p-10 bg-no-repeat bg-cover shadow-lg"
          style={{
            backgroundImage: "url('/Images/herobg.png')",
            filter: "drop-shadow(1px 1px 55px rgba(41, 0, 128, 0.4))",
          }}
        >
          <h1
            className={`text-black text-2xl sm:text-xl md:text-3xl lg:text-5xl font-medium text-center font-cashdisplay`}
          >
            Shift To <br />
            <span className="text-white px-2">Effortless</span>
            <br /> Payment
          </h1>
          <div className="flex flex-col gap-4 mt-6">
            <CustomButton>Sign Up</CustomButton>
            <CustomButton2 onClick={() => setShowPopup(true)}>
              Connect
            </CustomButton2>
          </div>
        </div>

        {/* FOr SMaller Screens */}
        <div className="w-[250px] md:hidden flex flex-col gap-[24px] justify-center items-center">
          <h1
            className={`text-black text-2xl sm:text-xl md:text-3xl lg:text-5xl font-medium text-center font-cashdisplay`}
          >
            Shift To <br />
            <span className="text-white px-2">Effortless</span>
            Payment
          </h1>
          <div className="flex flex-col gap-4 mt-6 w-[200px]">
            <CustomButton>Sign Up</CustomButton>
            <CustomButton2 onClick={() => setShowPopup(true)}>Connect</CustomButton2>
          </div>
        </div>
        {/* FOr SMaller Screens */}

        {/* Image Section */}
        <div className="relative  md:right-8 lg:right-10 w-full sm:w-1/2 max-w-md md:max-w-lg lg:max-w-xl flex justify-center">
          {/* Dollar Icons Animation
          {[...Array(10)].map((_, i) => (
            <motion.img
              key={i}
              src="/dollar.png"
              alt="Dollar Icon"
              className="absolute w-10 h-10"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "110%", opacity: 1 }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2,
              }}
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))} */}

          <img
            src="/lpHero.gif"
            className="w-full h-auto object-cover"
            alt="PayShift GIF"
          />
        </div>
      </div>

      {/* Popup */}
      {showPopup && (

        <div id="popup-overlay" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={closePopup}>

          <div className="bg-white lg:w-[800px] md:w-[90%] h-[600px] lg:px-[148px] md:px-[100px] md:py-[80px] py-[50px] px-[20px] sm:px-[50px] shadow-lg w-[90%] sm:w-[95%] overflow-hidden transform transition-transform duration-300 ease-in-out translate-y-full animate-popup bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            style={{ backgroundImage: "url('/Images/popUpbg.png')" }}>

            <div className="w-full mx-auto flex flex-col justify-center items-center gap-6 md:gap-10">
              <div className="w-full flex flex-col gap-4">
                {/* Businesss Name */}
                <div className="w-full mx-auto  flex flex-col justify-center items-start gap-2">
                  <label className="font-lexend font-[400] text-[16px]">Business Name</label>
                  <input type="text" className="w-full h-[40px] px-3 font-lexend shadow-xl outline-none" />
                </div>
                {/* Businesss Name */}

                {/* Register country  */}
                <div className="w-full mx-auto flex flex-col justify-center items-start gap-2">
                  <label className="font-lexend font-[400] text-[16px]">
                    Business Registered Country
                  </label>
                  <div className="w-full relative">
                    {/* Input Field */}
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onFocus={() => setRegisterCountry(true)} // Show dropdown on focus
                      className="w-full h-[40px] px-3 pr-10 font-lexend shadow-xl outline-none"
                      placeholder="Select a country"
                    />

                    {/* Dropdown Toggle Icon */}
                    <img
                      src="/Images/arrowdown.svg"
                      alt="Dropdown"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setRegisterCountry(!showRegisterCountry)}
                    />

                    {/* Dropdown List */}
                    {showRegisterCountry && (
                      <div className="absolute top-9 left-0 w-full bg-white shadow-lg max-h-60 overflow-auto z-50 border mt-1">
                        {countries.map((country, index) => (
                          <div
                            key={index}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => handleSelectCountry(country)}
                          >
                            {country.name}
                          </div>
                        ))
                        }
                      </div>
                    )}

                    {/* Filter countries */}
                    {/* {showDropdown && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg max-h-60 overflow-auto z-10 border mt-1">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country, index) => (
                <div
                  key={index}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSelectCountry(country)}
                >
                  {country.name}
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-500">No results found</div>
            )}
          </div>
        )} */}
                  </div>
                </div>

                {/* Register country  */}
                {/* Country Input number */}

                <div className="w-full mx-auto flex flex-col justify-center items-start gap-2 relative">
                  <label className="font-lexend font-[400] text-[16px]">Mobile</label>
                  {/* Input Field */}
                  <input
                    type="text"
                    className="w-full h-[40px] pl-[120px] pr-[40px] font-lexend shadow-xl outline-none"
                  />

                  <div className="flex flex-row items-center justify-center gap-2 absolute left-3 top-12 transform -translate-y-1/2  cursor-pointer bg-white z-10"
                    onClick={() => setShowDropdown(!showDropdown)}
                    style={{ pointerEvents: "auto" }}
                  >
                    {/* Country Flag */}
                    <img
                      src={selectedCountry.flag}
                      alt="Country Flag"
                      className="w-6 h-4"
                    />

                    {/* Country Code */}
                    <span className="text-black font-lexend font-medium">
                      {selectedCountry.code}
                    </span>

                    {/* Dropdown Toggle */}
                    <img
                      src="/Images/arrowdown.svg"
                      alt="Dropdown"
                      className="cursor-pointer"
                    />

                  </div>

                  {/* Transparent Overlay to Block Input in Flag/Code Area */}
                  <div
                    className="absolute left-0 top-0 h-[40px] w-[70px] bg-transparent z-20"
                    style={{ pointerEvents: "none" }} // Prevents interaction in this area
                  ></div>

                  {/* Dropdown List */}
                  {showDropdown && (
                    <div className="absolute top-[60px] left-0 w-full bg-white shadow-lg max-h-60 overflow-auto z-50">
                      {countries.map((country, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => handleSelectCountry(country)}
                        >
                          <img src={country.flag} alt={country.name} className="w-6 h-4" />
                          <span>{country.name}</span>
                          <span className="ml-auto text-gray-500">{country.code}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="w-full mx-auto  flex flex-col justify-center items-start gap-2">
                  <label className="font-lexend font-[400] text-[16px]">Email</label>
                  <input type="email" className="w-full h-[40px] px-3 font-lexend shadow-xl outline-none" />
                </div>
                {/* Email */}
              </div>
              <CustomButton onClick={() => setShowPopup(false)}>Register</CustomButton>
            </div>
          </div>

        </div>


      )}

      {/* Popup Animation */}
      <style jsx>{`
        @keyframes popup {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-popup {
          animation: popup 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default LpHero;

