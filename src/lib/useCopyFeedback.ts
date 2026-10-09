import { useEffect, useRef, useState } from 'react';

export function useCopyFeedback(successLabel: string, failureLabel: string) {
  const [status, setStatus] = useState('');
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  async function copy(text: string) {
    if (timer.current !== null) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
    try {
      if (!window.isSecureContext || typeof navigator.clipboard?.writeText !== 'function') {
        throw new Error('Clipboard unavailable');
      }
      await navigator.clipboard.writeText(text);
      setStatus(successLabel);
      timer.current = window.setTimeout(() => {
        setStatus('');
        timer.current = null;
      }, 2400);
    } catch {
      setStatus(failureLabel);
    }
  }

  return { status, copy };
}
