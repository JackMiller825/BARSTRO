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
      await copyText(text);
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

export async function copyText(text: string, source?: HTMLElement | null) {
  let clipboardPromise: Promise<void> | null = null;
  try {
    if (typeof navigator.clipboard?.writeText === 'function') {
      clipboardPromise = navigator.clipboard.writeText(text);
    }
  } catch {
    clipboardPromise = null;
  }

  const legacyCopied = legacyCopy(text, source ?? null);

  if (clipboardPromise) {
    try {
      await clipboardPromise;
      return;
    } catch {
      if (legacyCopied) return;
      throw new Error('Clipboard unavailable');
    }
  }
  if (!legacyCopied) throw new Error('Clipboard unavailable');
}

function legacyCopy(text: string, source: HTMLElement | null) {
  const selection = document.getSelection();
  const previousRanges: Range[] = [];
  if (selection) {
    for (let index = 0; index < selection.rangeCount; index += 1) {
      previousRanges.push(selection.getRangeAt(index));
    }
  }

  const area = document.createElement('textarea');
  area.value = text;
  area.readOnly = true;
  area.style.position = 'fixed';
  area.style.top = '0';
  area.style.left = '0';
  area.style.width = '1px';
  area.style.height = '1px';
  area.style.opacity = '0';
  document.body.append(area);

  if (source) {
    const range = document.createRange();
    range.selectNodeContents(source);
    selection?.removeAllRanges();
    selection?.addRange(range);
  } else {
    area.focus();
    area.select();
    area.setSelectionRange(0, text.length);
  }

  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch {
    copied = false;
  }

  area.remove();
  selection?.removeAllRanges();
  for (const range of previousRanges) selection?.addRange(range);
  return copied;
}
