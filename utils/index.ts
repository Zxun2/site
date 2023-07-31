import { BlogProps } from '../types/index';

export const getAllTags = (posts: BlogProps[]): string[] => {
  return posts.reduce<string[]>((a, b) => a.concat(b.tags), []);
};

export const byDate = (a: BlogProps, b: BlogProps) => {
  return Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt));
};

export const isSubset = (A: Array<string>, B: Array<string>) => {
  // checks if B is a subset of A
  return B.every((val: string) => A.indexOf(val) >= 0);
};

export const searchQuery = (frontMatter: BlogProps, searchValue: string) =>
  frontMatter.title.toLowerCase().includes(searchValue.toLowerCase());

export const freqObj = (arr: Array<string>) => {
  return arr.reduce((obj: { [key: string]: number }, e: string) => {
    obj[e] = (obj[e] || 0) + 1;
    return obj;
  }, {});
};
