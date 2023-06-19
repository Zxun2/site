import React, { FunctionComponent, ReactNode } from 'react';

interface Props {
  [x: string]: ReactNode;
}

const Timeline: FunctionComponent<Props> = ({ children }) => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700 list-none">
      {children}
    </ol>
  );
};

export default Timeline;
