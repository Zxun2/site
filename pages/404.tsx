import Link from 'next/link';
import Container from '@/components/Container';

export default function NotFound() {
  return (
    <Container title="404 not found" description="Page not found">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {'404\r'}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {
            'Why show a generic 404 when I can make it sound mysterious? It seems\r'
          }
          {
            "you've found something that used to exist, or you spelled something\r"
          }
          {
            "wrong. I'm guessing you spelled something wrong. Can you double check\r"
          }
          {'that URL?\r'}
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-900 text-center rounded-md text-black dark:text-white">
            {'Return Home\r'}
          </a>
        </Link>
      </div>
    </Container>
  );
}
