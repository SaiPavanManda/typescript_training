import { useState, useEffect, useRef } from 'react';

interface IUseComponentVisible {
    ref: React.RefObject<HTMLElement>;
    isComponentVisible: boolean;
    setIsComponentVisible: React.Dispatch<React.SetStateAction<boolean>>;

}

export default function useComponentVisible(initialIsVisible: boolean): IUseComponentVisible  {
  const [isComponentVisible, setIsComponentVisible] = useState<boolean>(
    initialIsVisible,
  );
  const ref = useRef<HTMLElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsComponentVisible(false);
    }
  };

  const handleEsc = (event: KeyboardEvent) => {
    if (event.keyCode === 27) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      window.removeEventListener('keydown', handleEsc);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}
