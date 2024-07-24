import Link from 'next/link';
import React from 'react';

// https://stackoverflow.com/questions/65632698/how-to-open-a-link-in-a-new-tab-in-nextjs

function Footer() {
  const container = 'container flex flex-col justify-between items-center mx-auto max-w-5xl';
  const sm = 'sm:flex-row sm:px-8 sm:py-8';
  const xs = 'px-6 py-8';

  return (
    <footer className="p-4 dark:bg-gray-800 text-gray-800">
      <div className={`${container} ${sm} ${xs}  md:flex md:justify-between`}>
        <Link href="/">
          <div className="flex flex-grow mb-7 sm:mb-0 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {'Zong Xun\r'}
          </div>
        </Link>
        <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3">
          <div className="self-center">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{'Social\r'}</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://github.com/Zxun2"
                  className="hover:underline "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {'Github\r'}
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.linkedin.com/in/zong-xun-lee-709a131bb/"
                  className="hover:underline "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {'LinkedIn\r'}
                </a>
              </li>
            </ul>
          </div>
          <div className="self-center">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{'About Me\r'}</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link href="/about" className="hover:underline ">
                  {'About\r'}
                </Link>
              </li>
              <li>
                <Link href="/uses" className="hover:underline">
                  {'Uses\r'}
                </Link>
              </li>
            </ul>
          </div>
          <div className="self-center">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{'Resources\r'}</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link href="/cheatsheets" className="hover:underline">
                  {'Cheatsheets\r'}
                </Link>
              </li>
              <li>
                <Link href="/snippets" className="hover:underline">
                  {'Snippets\r'}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${container} ${sm} ${xs} flex`}>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-900 sm:text-center dark:text-gray-400">
            {'© 2024\r'}
            <Link href="/" className="hover:underline">
              {'Lee Zong Xun\r'}
            </Link>
            {'. All Rights Reserved.\r'}
          </span>
        </div>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Zxun2"
            className="text-gray-600 dark:text-white"
          >
            <GithubIcon />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/zong-xun-lee-709a131bb/"
            className="text-gray-600 dark:text-white"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

export const LinkedInIcon = () => {
  return (
    <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
    </svg>
  );
};

export const GithubIcon = () => {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Footer;
