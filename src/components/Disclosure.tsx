import { useCallback, type ReactNode } from 'react';

type Props = {
  initialOpen?: boolean;
  summary: ReactNode;
  children: ReactNode;
};

export function Disclosure({ initialOpen = false, summary, children }: Props) {
  const setNode = useCallback(
    (node: HTMLDetailsElement | null) => {
      if (node && initialOpen) node.open = true;
    },
    [initialOpen],
  );

  return (
    <details ref={setNode}>
      <summary>{summary}</summary>
      {children}
    </details>
  );
}
