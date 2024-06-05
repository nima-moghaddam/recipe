import {  useEffect , RefObject } from 'react';

interface IOutsideClick {
  ref: RefObject<HTMLElement>;
  handleOutsidClick: () => void;
}

function useOutsideClick({ ref, handleOutsidClick }: IOutsideClick) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleOutsidClick();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, useOutsideClick]);
}

export default useOutsideClick;
