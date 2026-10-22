import { appName } from '@/lib/site';

/** The Upwell mark, in the current text color. */
export function Logo({ className = 'h-6' }: { className?: string }) {
  return <span role="img" aria-label={appName} className={`upwell-logo ${className}`} />;
}
