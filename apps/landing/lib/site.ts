export const appName = 'Upwell';
export const appDescription =
  'Update orchestrator for React Native and Expo: OTA updates, Play in-app updates and App Store prompts, driven by one policy.';

export const siteUrl = 'https://upwell.run';
export const docsUrl = 'https://docs.upwell.run';
export const githubUrl = 'https://github.com/updateswell/upwell';
export const npmUrl = 'https://www.npmjs.com/package/upwell';

/** A page on the docs site, e.g. `docs('/quick-start')`. */
export function docs(path = ''): string {
  return `${docsUrl}${path}`;
}
