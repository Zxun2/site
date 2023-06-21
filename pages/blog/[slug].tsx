import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from '@/components/BlogLayout';
import MDXComponents from '@/components/MDXComponents';
import { PostProps } from '@/types/index';
import { getFileBySlug, getFiles } from '@/lib/mdx';

export default function Blog({ mdxSource, frontMatter }: PostProps) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p: string) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const req = { type: 'blog', slug: params.slug };
  const post: PostProps = await getFileBySlug(req);
  return { props: { ...post } };
}
