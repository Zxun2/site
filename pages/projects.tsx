import Container from "@/components/Container";
import type { NextPage } from "next";
import Link from "next/link";

const Projects: NextPage = () => {
  return (
    <Container title={"projects | Zong xun"} description={"Projects Page"}>
      <div className="text-center">
        <h1>Site under construction 👷‍♂️</h1>
        <p className="mx-auto">This page is coming soon!</p>
        <p className="mx-auto">
          Stay tuned for the 2022 refresh of my website! In the meantime, you
          can contact me through the following:
        </p>
        <div className="flex justify-between w-48 m-auto">
          <a
            href="mailto:lzongxun@u.nus.edu"
            className="text-blue-600 no-underline hover:underline hover:underline-offset-1"
          >
            Email
          </a>
          <a
            href="https://github.com/Zxun2"
            className="text-blue-600 no-underline hover:underline hover:underline-offset-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/zong-xun-lee-709a131bb/"
            className="text-blue-600 no-underline hover:underline hover:underline-offset-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
