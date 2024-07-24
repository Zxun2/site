/* eslint-disable @next/next/no-img-element */
import Container from '@/components/Container';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Feature } from './projects';
import { StarFillIcon, RepoForkedIcon, EyeIcon } from '@primer/octicons-react';
import { ButtonToTop } from 'pages';

type Blob = {
  path: string;
  mode: string;
  type: string;
  sha: string;
  url: string;
  size?: number;
};

interface Props {
  subjects: Blob[];
  count: {
    stars: number;
    forks: number;
    watchers: number;
  };
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

  try {
    const apiUrl = 'https://api.github.com/repos/Zxun2/cheatsheets';
    const treeUrl = `${apiUrl}/git/trees/main`;
    const headers = { Authorization: `token ${process.env.GITHUB_TOKEN}` };

    const [treeResponse, repoResponse] = await Promise.all([
      fetch(treeUrl, { method: 'GET', headers }).then((res) => res.json()),
      fetch(apiUrl, { method: 'GET', headers }).then((res) => res.json()),
    ]);

    const subjects = treeResponse?.tree?.filter((subject: Blob) => !('size' in subject));

    return {
      props: {
        subjects,
        count: {
          stars: repoResponse?.stargazers_count,
          forks: repoResponse?.forks_count,
          watchers: repoResponse?.subscribers_count,
        },
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        subjects: [],
        count: {
          stars: 0,
          forks: 0,
          watchers: 0,
        },
      },
    };
  }
};

const map: Record<string, string> = {
  CS2109s: 'Introduction to Machine Learning and Artificial Intelligence',
  MA2104: 'Multivariable Calculus',
  CS2102: 'Database Systems',
  CS3230: 'Design and Analysis of Algorithms',
  ST1131: 'Introduction to Statistical Computing',
  ST2334: 'Probability and Statistics',
  ST2137: 'Computer Aided Data Analysis',
  CS2040s: 'Data Structures and Algorithms',
  CS2030s: 'Programming Methodology II',
  CS350: 'Operating Systems',
  SE464: 'Software Engineering Principles and Patterns',
  STAT333: 'Stochastic Processes',
  STAT331: 'Regression Analysis',
  STAT330: 'Mathematical Statistics',
};

const Cheatsheets = ({ subjects, count }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Container title="Cheatsheets" description="Blog Page">
      <div className="mb-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="mb-0">{'Cheatsheet'}</h1>
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Sunglasses.png"
              alt="Smiling Face with Sunglasses"
              width="35"
              height="35"
            />
          </div>
          <div className="flex items-center gap-2">
            <p>{count?.stars}</p>
            <StarFillIcon size={16} fill="#eac54f" />
            <p>{count?.forks}</p>
            <RepoForkedIcon size={16} />
            <p>{count?.watchers}</p>
            <EyeIcon size={16} />
          </div>
        </div>
        <p>
          {'A compilation of cheatsheets for NUS Computer Science (and Statistics)\r'}
          {'curriculum.\r'}
        </p>
      </div>
      <div className="grid gap-5 grid-cols-2">
        {subjects?.map((item) => (
          <Feature
            key={item.path}
            title={item.path}
            href={`https://github.com/Zxun2/cheatsheets/tree/main/${item.path}`}
            subtitle={map[item.path]}
          />
        ))}
      </div>
      <ButtonToTop />
    </Container>
  );
};

export default Cheatsheets;
