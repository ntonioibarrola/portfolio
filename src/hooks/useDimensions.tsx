import { RefObject, useEffect, useState } from 'react';

interface Dimensions {
  width: number;
  height: number;
}

export const useDimensions = (myRef: RefObject<HTMLDivElement>) => {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });

  useEffect(() => {
    const getDimensions = () => {
      if (!myRef.current) return;

      return {
        width: myRef.current.offsetWidth,
        height: myRef.current.offsetHeight,
      };
    };

    const handleResize = () => {
      setDimensions(getDimensions() as Dimensions);
    };

    if (myRef.current) {
      setDimensions(getDimensions() as Dimensions);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [myRef]);

  return dimensions;
};

export default useDimensions;
