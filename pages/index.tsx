import Container from "@/components/Container";
import Example from "@/components/tabs/Tab";
import Timeline from "@/components/timeline/Timeline";
import TimelineItem from "@/components/timeline/TimelineItem";
import { Tab } from "@headlessui/react";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Container title={"hello | Zong xun"} description={"Home Page"}>
      <h1 className="font-bold mb-4 text-dark dark:text-white">
        Hey, I'm Zong Xun 👋🏼
      </h1>
      <p className="mb-5 mt-4">
        I'm an efficiency junkie who also happens to write code and do sports. I
        love using vim and I believe that it's too fast to afford not to learn
        using.
      </p>
      <p>Welcome to my personal slice of the internet</p>
      <div>
        <Link href="/about">
          <a className="inline-flex w-auto items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            Learn more about me.
            <svg
              className="ml-2 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </Link>
      </div>
      <br />
      <hr />
      <h2>Timeline</h2>
      <Timeline>
        <TimelineItem
          title="Full Stack Software Engineer"
          description="Golang, React, PostgreSQL, Ruby on Rails, Redux"
          organisation="Computing for Voluntary Welfare Organisations"
          duration="May 9th, 2022 - Present"
        />
        <TimelineItem
          title="Full Stack Software Engineer"
          description="React, Express, Figma"
          organisation="NUS Fintech Society"
          duration="August 9th, 2021 - June 10th, 2022"
        />
        <TimelineItem
          title="Underwater Combat Medic"
          description="Saving lives"
          organisation="RSAF Navy"
          duration="May 4th, 2019 - May 4th, 2021"
        />
        <TimelineItem
          title="Student"
          description="5 distinctions, Science stream"
          organisation="Meridian Junior College"
          duration="Feb 3rd, 2017 - Nov 10th, 2019"
        />
      </Timeline>
      <br />
      <hr />

      <h2>Stuffs</h2>
      <Example />
    </Container>
  );
};

export default Home;
