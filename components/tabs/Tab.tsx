import { useState } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [categories] = useState({
    Projects: [
      {
        id: 1,
        title: 'Polyrhythms in Music',
        date: '2023/06/01',
      },
      {
        id: 2,
        title: 'FriendlyLink',
        date: '2023/04/10',
      },
      {
        id: 3,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
      },
      {
        id: 4,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
      },
      {
        id: 5,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
      },
    ],
    Blogs: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
      },
    ],
  });

  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="w-full mb-4 border-b border-gray-200 dark:border-gray-700 flex text-md font-bold text-center">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }: { selected: boolean }) =>
                classNames(
                  'inline-block p-2 border-b border-transparent',
                  selected
                    ? 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600'
                    : 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 dark:border-gray-700 dark:hover:text-gray-300'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-gray-100 dark:bg-gray-700 ',
                'ring-white ring-opacity-60 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul className="px-0">
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md py-1 hover:bg-gray-200 dark:hover:bg-blue-300 list-none w-full"
                  >
                    <h3 className="px-5 text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="list-none flex space-x-1 text-xs font-normal leading-4 text-gray-500 dark:text-gray-50">
                      <li>{post.date}</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
