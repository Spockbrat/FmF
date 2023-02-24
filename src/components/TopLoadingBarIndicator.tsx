'use client';

import { createRef, useEffect, useRef } from 'react';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';

function TopLoadingBarIndicator() {
  const ref = createRef<LoadingBarRef>();
  const runningRef = useRef(false);

  useEffect(() => {
    if (!ref.current || runningRef.current) {
      return;
    }

    ref.current.continuousStart(0, 250);
    runningRef.current = true;

    return () => {
      ref?.current?.complete();
      runningRef.current = false;
    };
  }, [ref]);

  return (
    <LoadingBar
      height={4}
      waitingTime={0}
      shadow={false}
      className={'bg-primary-500'}
      color={''}
      ref={ref}
    />
  );
}

export default TopLoadingBarIndicator;
