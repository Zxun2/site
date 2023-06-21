import matter, { GrayMatterFile } from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import { MdxSource, FrontMatter, BlogProps } from '../types/index';
import fs from 'fs';
import rehypeHighlight from 'rehype-highlight';

export const root: string = process.cwd();

export async function getFiles(type: string) {
  const files: Array<string> = fs.readdirSync(path.join(root, 'data', type));
  return files;
}

export function getSourcePath(type: string, slug: string) {
  return [root, 'data', slug ? type : `${type}.mdx`, slug ? `${slug}.mdx` : ''];
}

export async function getFileBySlug({ type, slug }: any) {
  const source: string = fs.readFileSync(
    path.join(...getSourcePath(type, slug)),
    'utf8'
  );

  const { data, content }: GrayMatterFile<string> = matter(source);
  const mdxSource: MdxSource = await serialize(content);

  const frontMatter: FrontMatter = {
    wordCount: content.split(/\s+/gu).length,
    readingTime: readingTime(content),
    slug: slug || null,
    title: data.title || null,
    summary: data.summary || null,
    publishedAt: data.publishedAt || null,
    tags: data.tags || null,
  };

  return { mdxSource, frontMatter };
}

export async function getAllFilesFrontMatter(type: string) {
  const files: Array<string> = fs.readdirSync(path.join(root, 'data', type));
  const allPosts: Array<BlogProps> = files.reduce<BlogProps[]>(
    (posts, slug) => {
      const source = fs.readFileSync(
        path.join(root, 'data', type, slug),
        'utf8'
      );
      const { data }: GrayMatterFile<string> = matter(source);
      const packet: Array<BlogProps> = [
        { ...data, slug: slug.replace(/.mdx$/g, '') } as BlogProps,
        ...posts,
      ];
      return packet;
    },
    []
  );
  return allPosts;
}
