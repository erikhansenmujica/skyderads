"use client";
import { useEffect, useState } from "react";

interface BusinessCardProps {
  title: string;
  content: string;
  price?: string;
  contactRef: React.RefObject<HTMLDivElement>;
}

export const BusinessCard = ({
  title,
  content,
  price,
  contactRef,
}: BusinessCardProps) => {
  // <div className="cursor-pointer p-6  sm:rounded-lg shadow-md text-white  bg-gradient-to-b from-blue-500 to-teal-400 transform transition duration-500 hover:scale-105">
  //   <h3 className="text-xl font-semibold mb-2">{title}</h3>
  //   <p>{content}</p>
  //   <p className="p-6">
  //     <b>{price ? price : ""}</b>
  //   </p>
  // </div>
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleClick = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    // Check screen width and set initial state
    const screenWidth = window.innerWidth;
    setIsCollapsed(screenWidth <= 640); // Adjust the breakpoint as needed
  }, []);

  const toggleCollapse = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 640) setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`cursor-pointer p-6 sm:rounded-lg shadow-md text-white bg-gradient-to-b from-blue-500 to-teal-400 sm:transform sm:transition sm:duration-500 sm:hover:scale-105 ${
        isCollapsed ? "max-h-16 overflow-hidden" : "max-h-screen"
      }`}
      // onClick={() => handleClick(contactRef)}
    >
      <h3 className="text-xl font-semibold mb-2" onClick={toggleCollapse}>
        {title}
      </h3>
      <div
        className={`transition-all opacity-0 ${
          isCollapsed ? "hidden" : "block opacity-100"
        }`}
      >
        <p>{content}</p>
        <p className="p-6">
          <b>{price ? price : ""}</b>
        </p>
      </div>
    </div>
  );
};
