export const appName = 'Upwell';
export const appDescription =
  'Open-source update orchestrator for React Native and Expo. One remote policy drives OTA updates, forced updates, Play in-app updates and App Store prompts.';

export const siteUrl = 'https://upwell.run';
export const docsUrl = 'https://docs.upwell.run';
export const githubUrl = 'https://github.com/updateswell/upwell';
export const npmUrl = 'https://www.npmjs.com/package/upwell';

/**
 * GA4 property "upwell" (stream "upwell"). docs.upwell.run sends to the same stream, so a visit
 * that starts here and continues in the docs is one session.
 */
export const gaId = 'G-M93ZG8RWCG';

/** A page on the docs site, e.g. `docs('/quick-start')`. */
export function docs(path = ''): string {
  return `${docsUrl}${path}`;
}
