import BlogPost from '@/components/BlogPost';
import Container from '@/components/Container';
import TagList from '@/components/TagList';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { BlogProps } from '@/types/index';
import { useState } from 'react';
import { byDate, getAllTags, isSubset, searchQuery } from 'utils';

export default function Blog({ posts }: { posts: BlogProps[] }) {
  const [activeTags, setActiveTags] = useState<Array<string>>([]);
  const [searchValue, setSearchValue] = useState('');
  const allTags = getAllTags(posts);

  const filterTags = (frontMatter: BlogProps) =>
    searchQuery(frontMatter, searchValue) &&
    ((activeTags.length === 0) || isSubset(frontMatter.tags, activeTags));

  const filteredBlogPosts = posts.sort(byDate).filter(filterTags);

  return (
    <Container title="Blog" description="Blog Page">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {"Blog 📖\r"}
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {`In total, I've written ${posts.length} articles on this site.
            Use the search below to filter by title, or use the buttons
            below to filter by tag.`}
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <TagList
          allTags={allTags}
          activeTags={activeTags}
          setActiveTags={setActiveTags}
        />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-gray-200">
          {"All Posts\r"}
        </h3>
        {(filteredBlogPosts.length === 0) && (
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {"No posts found.\r"}
          </p>
        )}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts: Array<BlogProps> = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
