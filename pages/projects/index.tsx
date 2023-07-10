import Container from '@/components/Container';
import { data as projects, oss } from '@/data/index';
import clsx from 'clsx';
import type { NextPage } from 'next';
import Link from 'next/link';
import { ButtonToTop } from 'pages';
import { ComponentProps, ReactNode } from 'react';

interface FeatureProps extends Omit<ComponentProps<'div'>, 'title'> {
  description?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  tags?: string[];
  href?: string;
}

export function Feature({
  title,
  subtitle,
  description,
  tags,
  href,
  className,
  ...props
}: FeatureProps) {
  return (
    <Link href={href!}>
      <div
        className={clsx(
          className,
          'p-5 border-2 border-solid border-gray-900 rounded-md bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white  dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-blue-700'
        )}
        {...props}
      >
        <h4 className="font-bold mt-0">{title}</h4>
        <h6 className="text-gray-600 text-sm font-light inset-0 italic">
          {subtitle ?? ''}
        </h6>
        <p className="text-sm">{description ?? ''}</p>
        {tags &&
          tags!.map((tag, idx) => (
            <span
              key={idx}
              className="inline-grid bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
            >
              {tag}
            </span>
          ))}
      </div>
    </Link>
  );
}

const Projects: NextPage = () => {
  return (
    <Container title="Projects" description="Projects Page">
      <div className="flex justify-center">
        <div className="flex items-center gap-2">
          <h1 className="m-0">{'Projects'}</h1>
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Camera%20with%20Flash.png"
            alt="Camera with Flash"
            width="45"
            height="45"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((item) => (
          <Feature
            key={item.title}
            description={item.description}
            subtitle={item.subtitle}
            title={item.title}
            tags={item.tags}
            href={item.href}
          />
        ))}
      </div>
      <hr />
      <div className="text-center">
        <h1>{'Open Source Contributions'}</h1>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {oss.map((item) => (
          <Feature
            key={item.title}
            description={item.description}
            subtitle={item.subtitle}
            title={item.title}
            tags={item.tags}
            href={item.href}
          />
        ))}
      </div>
      <ButtonToTop />
    </Container>
  );
};

export default Projects;
