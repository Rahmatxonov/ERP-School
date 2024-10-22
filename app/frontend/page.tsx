'use client';

import { useEffect, useState } from 'react';
import data from '../db.json';

interface Card {
  title: string;
  description: string;
  link_url: string;
  link_text: string;
}

const Frontend = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    console.log(data);

    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredCards = data.cards.filter(
    (card: Card) =>
      card.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div className="md:absolute md:pl-[320px] pt-20 md:left-0 md:right-0">
      <div className="flex flex-wrap gap-[10px]">
        {filteredCards.map((component, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md bg-white w-full md:w-1/3"
          >
            <h2 className="text-lg font-bold">{component.title}</h2>
            <p className="text-gray-700">{component.description}</p>
            <a
              href={component.link_url}
              className="text-blue-500 hover:underline"
            >
              {component.link_text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
