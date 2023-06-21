import { useEffect } from 'react';
import { freqObj } from 'utils';

type Props = {
  allTags: string[];
  activeTags: string[];
  setActiveTags: (tags: string[]) => void;
};

const TagList = ({ allTags, activeTags, setActiveTags }: Props) => {
  useEffect(() => {
    console.log(allTags, activeTags);
  }, [allTags, activeTags]);

  const handleClear = () => {
    setActiveTags([]);
  };

  const ToggleTag = (key: string) => {
    if (!activeTags.includes(key)) {
      setActiveTags([...activeTags, key]);
    } else {
      const newActiveTags = activeTags.filter((e: string) => e !== key);
      console.log(newActiveTags);
      setActiveTags(newActiveTags);
    }
  };

  const tagCount: { [key: string]: number } = freqObj(allTags);
  const tagKeys = Object.keys(tagCount).sort();
  return (
    <div className="flex max-w-2xl flex-wrap">
      {tagKeys.map((key, i) => (
        <div className="mb-1.5 leading-8" key={i}>
          <a
            className={`no-underline p-1 mx-1 rounded-md border-2 text-gray-500 hover:bg-gray-100 border-gray-200  hover:dark:bg-gray-700 dark:border-gray-400 dark:text-gray-400 ${
              activeTags.includes(key)
                ? ' border-blue-400 dark:border-blue-800'
                : ''
            }`}
            onClick={() => ToggleTag(key)}
          >
            <span>
              {`${key} `}
              <span className="text-gray-500 dark:text-gray-400 text-xs">
                {tagCount[key]}
              </span>
            </span>
          </a>
        </div>
      ))}
      <div className="mb-1.5 leading-8">
        <a
          onClick={handleClear}
          className="rounded-md py-1 px-2 mx-1 text-blue-500 no-underline  dark:text-blue-100"
        >
          {'clear\r'}
        </a>
      </div>
    </div>
  );
};

export default TagList;
