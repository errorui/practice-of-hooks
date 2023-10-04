import React, { useEffect, useState } from 'react';
const usewindowsize = () => {
  const [windows, setwindowsize] = useState(1920);
  useEffect(() => {
    const handlewindowsize = () => {
      setwindowsize(window.innerWidth);
    };
    window.addEventListener('resize', handlewindowsize);
    return () => {
      window.removeEventListener('resize', handlewindowsize);
    };
  }, []);
  return windows;
};

export default usewindowsize;
setInterval;
