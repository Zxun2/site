import Container from '@/components/Container';
import type { NextPage } from 'next';
import { Feature } from './projects';
import { StarFillIcon, RepoForkedIcon, EyeIcon } from '@primer/octicons-react';

export async function getServerSideProps() {
  try {
    const apiUrl = 'https://api.github.com/repos/Zxun2/cheatsheets';
    const treeUrl = `${apiUrl}/git/trees/main`;
    const headers = { Authorization: `token ${process.env.GITHUB_TOKEN}` };

    const [treeResponse, repoResponse] = await Promise.all([
      fetch(treeUrl, { method: 'GET', headers }).then((res) => res.json()),
      fetch(apiUrl, { method: 'GET', headers }).then((res) => res.json()),
    ]);

    const subjects = treeResponse?.tree?.filter(
      (subject: Blob) => !('size' in subject)
    );

    return {
      subjects,
      count: {
        stars: repoResponse?.stargazers_count,
        forks: repoResponse?.forks_count,
        watchers: repoResponse?.subscribers_count,
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
}

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
};

const Cheatsheets: NextPage<Props> = ({ subjects, count }) => {
  return (
    <Container title={'Cheatsheets | Zong xun'} description={'Blog Page'}>
      <div className="mb-4 flex flex-col sm:flex-row items-center justify-between">
        <h1 className="mb-0">Cheatsheet 🙂</h1>
        <div className="flex items-center gap-2">
          <p>{count?.stars}</p>
          <StarFillIcon size={16} fill="#eac54f" />
          <p>{count?.forks}</p>
          <RepoForkedIcon size={16} />
          <p>{count?.watchers}</p>
          <EyeIcon size={16} />
        </div>
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
    </Container>
  );
};

export default Cheatsheets;
