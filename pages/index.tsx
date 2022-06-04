import Container from "@/components/Container";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Container title={"Hello!"} description={"Home Page"}>
      <h1 className="font-bold mb-4">Hey, I'm Zong Xun 👋🏼</h1>
      <p className="mb-12 mt-4">
        I'm an efficiency junkie who also happens to write code and do sports. I
        love using vim and I believe that it's too fast to afford not to learn
        using. Welcome to my personal slice of the internet –&nbsp;
        <Link href="/about">
          <a>learn more about me.</a>
        </Link>
      </p>
    </Container>
  );
};

export default Home;
