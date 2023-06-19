import React from 'react';

type Props = {
  title: string;
  organisation: string;
  description: string | { title?: string; body: string[] };
  duration: string;
};

const TimelineItem = ({
  title,
  organisation,
  description,
  duration,
}: Props) => {
  return (
    <li className="mb-10 ml-6">
      <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-gray-100 rounded-full ring-white dark:ring-gray-900 dark:bg-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        {title}
        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
          {organisation}
        </span>
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {duration}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {typeof description === 'string' ? (
          description
        ) : (
          <>
            <p>{description?.title}</p>
            <ul>
              {description?.body.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </p>
    </li>
  );
};

export default TimelineItem;
