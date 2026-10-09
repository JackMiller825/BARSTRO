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
      await writeText(text);
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

async function writeText(text: string) {
  if (window.isSecureContext && typeof navigator.clipboard?.writeText === 'function') {
    await navigator.clipboard.writeText(text);
    return;
  }
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.left = '-9999px';
  document.body.append(area);
  area.select();
  const copied = document.execCommand('copy');
  area.remove();
  if (!copied) throw new Error('Clipboard unavailable');
}
