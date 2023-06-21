import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import Container from '@/components/Container';
import { FrontMatter } from '../types/index';

const ArticleDetails = ({ frontMatter }: any) => {
  const date = format(parseISO(frontMatter.publishedAt), 'MMM d, yyyy');
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-4 mb-8">
      <div className="flex items-center">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {`zongxun / ${date}`}
        </p>
      </div>
      <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
        {frontMatter.readingTime.text}
      </p>
    </div>
  );
};

const ArticleContent = ({ children }: any) => (
  <div className="prose dark:prose-dark mb-8">{children}</div>
);

export default function BlogLayout({
  children,
  frontMatter,
}: {
  children: any;
  frontMatter: FrontMatter;
}) {
  return (
    <Container
      title={frontMatter.title.toLowerCase()}
      description={frontMatter.summary}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <h1 className="mb-4">{frontMatter.title}</h1>
      <ArticleDetails frontMatter={frontMatter} />
      <ArticleContent>{children}</ArticleContent>
    </Container>
  );
}
