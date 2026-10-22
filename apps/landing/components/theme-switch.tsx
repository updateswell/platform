'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';
import { flushSync } from 'react-dom';

const noop = () => () => {};

/** Light/dark toggle, matching the one in the docs (Fumadocs' ThemeSwitch). */
export function ThemeSwitch({ className = '' }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  // The theme is only known on the client; render neither icon as active until then.
  const mounted = useSyncExternalStore(
    noop,
    () => true,
    () => false
  );
  const value = mounted ? resolvedTheme : null;

  const toggle = () => {
    const next = value === 'light' ? 'dark' : 'light';
    if (document.startViewTransition)
      document.startViewTransition(() => flushSync(() => setTheme(next)));
    else setTheme(next);
  };

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggle}
      className={`inline-flex items-center overflow-hidden rounded-full border p-1 *:rounded-full ${className}`}>
      {(
        [
          ['light', SunIcon],
          ['dark', MoonIcon],
        ] as const
      ).map(([key, Icon]) => (
        <Icon
          key={key}
          fill="currentColor"
          className={`size-6.5 p-1.5 ${value === key ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
        />
      ))}
    </button>
  );
}
