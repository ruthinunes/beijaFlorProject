import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';

const useDebounce = (func, wait) => {
  const [debouncedFunc, setDebouncedFunc] = useState(() => () => {});

  useEffect(() => {
    const debounced = setTimeout(() => {
      setDebouncedFunc(() => func);
    }, wait);

    return () => {
      clearTimeout(debounced);
    };
  }, [func, wait]);

  return debouncedFunc;
};

function useScreenWidth() {
  const [width, setWidth] = useState(null);

  const handleResize = useCallback(() => {
    const newWidth = window.innerWidth;
    // console.log(newWidth)
    if (newWidth !== width) {
      setWidth(newWidth);
    }
  }, [width]);

  const debouncedResize = useDebounce(handleResize, 250);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      window.addEventListener('resize', debouncedResize);
    } else {
      // código de fallback para ambientes que não suportam a API de navegador
      setWidth(0);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', debouncedResize);
      }
    };
  }, [debouncedResize]);

  return width;
}

export default useScreenWidth;
