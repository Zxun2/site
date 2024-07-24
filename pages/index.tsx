import Container from '@/components/Container';
import Timeline from '@/components/timeline/Timeline';
import TimelineItem from '@/components/timeline/TimelineItem';
import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowUpIcon, ChevronDownIcon, ChevronUpIcon } from '@primer/octicons-react';
import Contact from '@/components/Contact';
import { useState } from 'react';

export const ButtonToTop = () => {
  return (
    <div className="mt-3 self-end flex items-center px-2 py-1 border-2 border-blue-700 dark:border-blue-300 rounded-md">
      <button
        className="text-blue-700 dark:text-blue-300 border-2 border-none"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        {'Back to top\r'}

        <ArrowUpIcon size={20} className="text-blue-700 dark:text-blue-300" />
      </button>
    </div>
  );
};

const Home: NextPage = () => {
  const [open, setOpen] = useState(true);
  return (
    <Container title="Home" description="Home Page">
      <div className="flex items-center mb-1 gap-2">
        <h1 className="font-bold text-dark m-0 dark:text-white">{"Hey, I'm Zong Xun"}</h1>
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand%20Light%20Skin%20Tone.png"
          alt="Waving Hand Light Skin Tone"
          width="40"
          height="40"
        />
      </div>
      <p className="mb-2 mt-1">
        {"I'm a self-proclaimed efficiency enthusiast who loves dabbling in both\r"}
        {"coding and sports. When I'm not busy crafting my own applications,\r"}
        {"you'll likely find me joyfully reverse-engineering some other intriguing\r"}
        {'ones!\r'}
      </p>
      <p>{'Welcome to my personal slice of the internet.'}</p>
      <div className="flex">
        <Link href="/about">
          <a className="inline-flex w-auto items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            {'Learn more about me\r'}
            <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </Link>
        <Contact />
      </div>
      <br />
      <hr />
      <div className="flex items-center gap-4">
        <h2 className="m-0">{'Experiences'}</h2>
      </div>
      <Timeline>
        <TimelineItem
          title="Software Engineer Intern"
          description="
            Currently in Global Payments (Product), previously from
            Trust & Safety (Infrastructure) and 
            Trust & Safety (Product)
          "
          organisation="Tiktok, Singapore"
          duration="Jan 15th, 2024 - Present"
        />
        {open && (
          <>
            <TimelineItem
              title="Software Engineer Intern"
              description="Worked on jupyterlab-git and jupyterlab-variableinspector extensions"
              organisation="Jupyterlab, Canada"
              duration="Aug 18th, 2023 - Dec 8th, 2023"
            />
            <TimelineItem
              title="Software Engineer Intern"
              description="Migration to V2, Cache Optimization"
              organisation="Expensify, New York City, USA"
              duration="May 8th, 2022 - Aug 25th, 2023"
            />
            <TimelineItem
              title="Software Engineer Intern"
              description="Optimizing Performance with Golang and gRPC"
              organisation="Seer AI, Singapore"
              duration="Dec 9th, 2022 - Feb 1st, 2023"
            />
            <TimelineItem
              title="Software Engineer Intern"
              description="Security, Access Control, Policy Management, Dashboard"
              organisation="Computing for Voluntary Welfare Organisations, Singapore"
              duration="May 9th, 2022 - Aug 5th, 2022"
            />
          </>
        )}
      </Timeline>
      <button onClick={() => setOpen((prev) => !prev)}>
        {!open ? (
          <div className="flex gap-1 items-center justify-center">
            <p>{'Show more'}</p>
            <ChevronDownIcon size={20} />
          </div>
        ) : (
          <ChevronUpIcon size={20} />
        )}
      </button>

      <div className="flex items-center gap-4">
        <h2 className="m-0">{'Education'}</h2>
      </div>
      <Timeline>
        <TimelineItem
          key={0}
          title="Computer Science Student"
          description={[
            {
              title: 'A member of',
              body: [
                'NUS Developer Student Club',
                'NUS Fintech Society',
                'NUS SoC TIPs',
                'NUS OSS',
                'GIC Computing for Community Fellowship',
                'MLH Fellowship',
                'CoPhi Research Group',
              ],
            },
            {
              title: 'Teaching Assistant for',
              body: [
                'CS4248 (Natural Language Processing)',
                'CS2103/T (Software Engineering)',
                'CS2109s (Introduction to Artificial Intelligence and Machine Learning)',
                'CS2040s (Data Structures and Algorithms)',
                'CS1231s (Discrete Structures)',
                'CS2030s (Programming Methodology II)',
                'CS1101s (Programming Methodology)',
              ],
            },
          ]}
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
          <div className=" inline-flex w-auto items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            {'Check out my projects\r'}
          </div>
        </Link>
      </div>
      <ButtonToTop />
    </Container>
  );
};

export default Home;
