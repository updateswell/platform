'use client';

import { sendGAEvent } from '@next/third-parties/google';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { useState } from 'react';

export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        void navigator.clipboard.writeText(command).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        });
        // A key event in GA: the closest thing to an install we can see from here.
        if (window.dataLayer) sendGAEvent('event', 'copy_install_command', { command });
      }}
      className="group inline-flex items-center gap-3 rounded-full border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      aria-label={`Copy "${command}"`}>
      <span className="text-muted-foreground/60">$</span>
      <span className="text-foreground">{command}</span>
      {copied ? (
        <CheckIcon className="size-3.5" />
      ) : (
        <CopyIcon className="size-3.5 opacity-60 group-hover:opacity-100" />
      )}
    </button>
  );
}
