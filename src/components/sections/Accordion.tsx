import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';

const faqs = [
  {
    title: 'What is Lorem Ipsum?',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: 'Why do we use it?',
    content:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    title: 'Where does it come from?',
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div>
      {faqs.map((question, index) => (
        <div key={index} className="border-t border-gray-200 text-black">
          <button
            type="button"
            className="w-full text-left py-4 px-4 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium">{question.title}</p>
              {activeIndex === index ? (
                <ChevronUpIcon className="h-6 w-6" />
              ) : (
                <ChevronDownIcon className="h-6 w-6" />
              )}
            </div>
          </button>
          <div
            className={classNames(
              'transition-all',
              activeIndex === index ? 'max-h-96' : 'max-h-0',
            )}
          >
            <div className="py-4 px-4">{question.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
