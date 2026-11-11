'use client';

import Dither from '@/components/reactbits/Dither';

/** Monochrome dithered waves (React Bits Dither), for dark bands. */
export function DitherBand({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <Dither
        palette={['#151412', '#282623', '#55524d', '#a5a19a']}
        pixelSize={3}
        waveSpeed={0.03}
        waveFrequency={2.5}
        waveAmplitude={0.35}
        enableMouseInteraction
        mouseRadius={0.4}
        clickRipple={false}
      />
    </div>
  );
}
