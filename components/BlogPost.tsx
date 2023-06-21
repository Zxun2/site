import Link from 'next/link';
import { BlogProps } from '../types/index';

const BlogPost = ({ title, summary, slug, publishedAt }: BlogProps) => {
  const opts: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const date: string = new Date(publishedAt).toLocaleDateString('en-US', opts);
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full no-underline">
        <div className="mb-5 w-full">
          <div className="flex flex-row justify-between items-center">
            <h5 className="font-medium">{title}</h5>
            <p className="lighter text-right w-32 m-0">{date}</p>
          </div>
          <p className="italic lighter">{summary}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
