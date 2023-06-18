import Container from '@/components/Container';
import type { NextPage } from 'next';

const Blog: NextPage = () => {
  return (
    <Container title="Snippets | Zong xun" description="Blog Page">
      <div className="text-center">
        <h1>{'Site under construction 👷‍♂️'}</h1>
        <p className="mx-auto">{'This page is coming soon!'}</p>
        <p className="mx-auto">
          {
            'Stay tuned for the 2024 refresh of my website! In the meantime, you\r'
          }
          {'can contact me through the following:\r'}
        </p>
        <div className="flex justify-between w-48 m-auto">
          <a
            href="mailto:lzongxun@u.nus.edu"
            className="text-blue-600 no-underline hover:underline hover:underline-offset-1"
          >
            {'Email\r'}
          </a>
          <a
            href="https://github.com/Zxun2"
            className="text-blue-600 no-underline hover:underline hover:underline-offset-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Github\r'}
          </a>
          <a
            href="https://www.linkedin.com/in/zong-xun-lee-709a131bb/"
            className="text-blue-600 no-underline hover:underline hover:underline-offset-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            {'LinkedIn\r'}
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
