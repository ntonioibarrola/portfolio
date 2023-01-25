import { FC, Fragment, useEffect, useState } from 'react';
import tw from '../lib/tailwind';

interface TypeWriterProps {
  ascii: string[];
  color?: string;
  speed?: number;
}

const getTextColor = (color: string) => {
  let style = '';

  switch (color) {
    case 'froly':
      style = 'text-froly-100';
      break;

    case 'portage':
      style = 'text-portage-100';
      break;

    default:
      style = 'text-white';
      break;
  }

  return style;
};

const TypeWriter: FC<TypeWriterProps> = ({ ascii, color = 'white', speed = 500 }) => {
  const [array, setArray] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => {
        if (index >= ascii.length - 1) {
          clearInterval(interval);
          return index;
        }
        return index + 1;
      });
    }, speed);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setArray((prevArray) => [...prevArray, ascii[index].replaceAll(/ /g, '\u00a0')]);
  }, [index]);

  return (
    <Fragment>
      {array.map((line, index) => (
        <p
          className={`typing text-sm font-extrabold ${getTextColor(color)}`}
          key={`welcome-ascii-line-${index}`}
        >
          {line}
        </p>
      ))}
    </Fragment>
  );
};

export default TypeWriter;
