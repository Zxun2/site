import Container from '@/components/Container';
import Timeline from '@/components/timeline/Timeline';
import TimelineItem from '@/components/timeline/TimelineItem';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Container title="Home" description="Home Page">
      <h1 className="font-bold mb-4 text-dark dark:text-white">
        {"Hey, I'm Zong Xun 👋🏼\r"}
      </h1>
      <p className="mb-5 mt-4">
        {
          "I'm an efficiency junkie who also happens to write code and do sports. I\r"
        }
        {
          "love using vim and I believe that it's too fast to afford not to learn\r"
        }
        {'using.\r'}
      </p>
      <p>{'Welcome to my personal slice of the internet'}</p>
      <div className="flex gap-1">
        <Link href="/about">
          <a className="inline-flex w-auto items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            {'Learn more about me\r'}
            <svg
              className="ml-2 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </Link>

        <a
          target="_blank"
          href="https://cal.com/zongxun"
          rel="noopener noreferrer"
          className="transition-all inline-flex w-auto items-center py-2 px-4 text-sm font-medium bg-blue-700 text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-white dark:focus:ring-1"
        >
          {'Contact me\r'}
        </a>
      </div>
      <br />
      <hr />
      <h2>{'Timeline'}</h2>
      <Timeline>
        <TimelineItem
          title="Full Stack Software Engineer"
          description="React, TypeScript, PostgreSQL"
          organisation="Expensify, Sans Francisco, USA"
          duration="Aug 9th, 2023 - Present"
        />
        <TimelineItem
          title="Full Stack Software Engineer"
          description="Golang, gRPC, Flask, Tensorflow"
          organisation="Seer AI, Singapore"
          duration="Dec 9th, 2022 - Feb 1st, 2023"
        />
        <TimelineItem
          title="Full Stack Software Engineer"
          description="Golang, React, PostgreSQL, Ruby on Rails, Redux"
          organisation="Computing for Voluntary Welfare Organisations, Singapore"
          duration="May 9th, 2022 - Aug 5th, 2022"
        />
        <TimelineItem
          title="Computer Science Student"
          description={{
            title: 'A proud member of',
            body: [
              'NUS Developer Student Club',
              'NUS Fintech Society',
              'NUS SoC TIPs',
            ],
          }}
          organisation="National University of Singapore"
          duration="August 9th, 2021 - Present"
        />
      </Timeline>
      <hr />

      <div className="flex gap-4 justify-center">
        <Link href="/blog">
          <div className="inline-flex w-auto items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            {'Head over to my blog\r'}
          </div>
        </Link>
        <Link href="/projects">
          <div className="inline-flex w-auto items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            {'Check out my projects\r'}
          </div>
        </Link>
      </div>
      {/* <Example /> */}
      <div className="mt-3 self-end">
        <button
          className="underline text-blue-700 dark:text-blue-300 border-2 border-none"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          {'Back to top\r'}
        </button>
      </div>
    </Container>
  );
};

export default Home;
