import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  company: string;
  location: string;
  description: string;
  categories: string[];
  img: string;
}

const Card: React.FC<CardProps> = ({
  title,
  company,
  location,
  description,
  categories,
  img,
}) => {
  const maxLen = 304;

  const truncateText = (text: string): string =>
    text.length > maxLen ? text.substring(0, maxLen) : text;

  const colors = ["#FFB836", "#5a55e6"];

  return (
    <div className="w-full h-fit border-2 rounded-3xl flex py-6 mt-8 bg-white hover:bg-gray-200">
      <div className="w-48 flex justify-center">
        <Image className="w-12 h-12" src={img} alt={`${title} image`} />
      </div>
      <div className="flex flex-col space-y-2">
        <h2 className="size1">{title}</h2>

        <div className="flex space-x-3 size2">
          <h6>{company}</h6>
          <h6>{location}</h6>
        </div>

        <p className="size3 pr-16">{truncateText(description)}</p>

        <ul className="flex space-x-2">
          <li
            className="px-2 py-1 text-xs font-semibold border-2 rounded-3xl bg-green-100"
            style={{ color: "#56CDAD" }}
          >
            In person
          </li>
          <span className="font-light">|</span>
          {categories.map((item, index) => (
            <li
              key={index}
              className="px-2 py-1 text-xs border-2 rounded-full"
              style={{
                color: colors[index % 2],
                borderColor: colors[index % 2],
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
