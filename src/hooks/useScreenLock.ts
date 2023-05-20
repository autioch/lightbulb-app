/* eslint-disable no-console */

type WakeLockSentinel = EventTarget & {
    readonly released: Boolean;
    readonly type: string;
    release() : Promise<undefined>
}

declare global{
    interface Navigator {
        wakeLock: {
            request: (type: 'screen') => Promise<WakeLockSentinel>
        }
    }
}

let wakeLock: WakeLockSentinel | undefined;

export async function useScreenLock() {
  if ('wakeLock' in navigator) {
    try {
      wakeLock = await navigator.wakeLock.request('screen');
      console.log('Screen lock acquired');
    } catch (err: unknown) {
      console.log(err instanceof Error ? err.message : err);
    }
  } else {
    console.log('No screen API supported.');
  }

  return () => {
    console.log('Screen lock relesed');
    wakeLock?.release();
  };
}
