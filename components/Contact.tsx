import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@primer/octicons-react';
import { Fragment } from 'react';
import { socials } from '../data';

export default function Contact() {
  return (
    <div className="max-w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                border border-gray-200 group inline-flex items-center rounded-md bg-blue-700 px-4 py-2 text-sm font-medium underline text-white hover:bg-gray-100 hover:text-blue-700 hover:text-opacity-100 focus:z-10  focus:outline-none dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-white dark:focus:ring-1`}
            >
              <span>{'Contact me'}</span>
              <ChevronDownIcon
                className={`
                  ml-2 h-5 w-5  dark:text-white transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-3/4 z-10 mt-3 w-max -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="bg-white dark:bg-gray-800 ">
                    {socials.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center text-sm rounded-md transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring no-underline focus-visible:ring-opacity-50 p-2 gap-2 w-full dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        <item.icon size={20} />
                        <span className="inline-block">{item.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
