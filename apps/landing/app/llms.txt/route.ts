import { appName, docs, githubUrl, npmUrl, siteUrl } from '@/lib/site';

// https://llmstxt.org. The docs keep the full index (docs.upwell.run/llms.txt); this one says what
// Upwell is, when it fits, and where to read more, for assistants that start at the domain.
const body = `# ${appName}

> ${appName} is an open-source (MIT) update orchestrator for React Native and Expo apps. On every
> launch and foreground it decides which update an install needs (an OTA JavaScript update, a new
> store build, or nothing) from one remote JSON policy, and runs that update end to end: Google
> Play in-app updates on Android, the App Store sheet on iOS, and expo-updates for OTA.

Install with \`npx expo install upwell\` (npm package: \`upwell\`). It's an Expo module, so it also
works in bare React Native apps that have Expo modules installed. No backend is required: the
policy is a static JSON file you host anywhere (a CDN, a bucket, GitHub Pages).

Upwell fits when a React Native or Expo team needs:

- **Forced updates**: block builds below a minimum version (Play immediate update on Android, a
  blocking screen plus the App Store sheet on iOS), optionally after a grace period.
- **Stranded install detection**: after a native change bumps the runtime version, installs on the
  old binary silently stop receiving OTA updates. expo-updates can't tell them apart from up-to-date
  installs; Upwell detects them and moves them to the store.
- **Soft store updates**: Play flexible updates with progress and restart-to-install, the App Store
  sheet on iOS, with snoozes, frequency caps and staged rollout.
- **OTA updates with expo-updates**: download in the background, apply on next launch, after a
  prompt, or right away.
- **Transparent OTA**: describe each OTA release in \`releases.json\`, shown to users as an
  "Updated" sheet and a "What's new" history.
- **Custom UI**: headless hooks (\`useAppUpdate()\`) instead of the bundled UI kit.

Upwell doesn't host OTA updates (keep EAS Update or a self-hosted server) and collects no data.
Libraries such as react-native-in-app-updates or expo-in-app-updates wrap Play's in-app update API
only; Upwell also covers iOS, OTA, stranded installs and the remote policy behind one decision
engine.

## Docs

- [Introduction](${docs('/index.md')}): what Upwell does and why
- [Quick start](${docs('/quick-start.md')}): publish a policy, wrap the app, handle every update flow
- [Installation](${docs('/installation.md')}): Expo and bare React Native setup
- [policy.json reference](${docs('/policy.md')}): every field of the remote policy
- [Stranded installs](${docs('/concepts/stranded-installs.md')}): why OTA stops after a native change
- [Forced updates](${docs('/guides/forced-updates.md')}): block old versions, with a grace period
- [OTA updates with expo-updates](${docs('/guides/ota-updates.md')})
- [Android in-app updates](${docs('/guides/android-play-updates.md')}): Play flexible and immediate
- [iOS App Store updates](${docs('/guides/ios-app-store.md')})
- [Build your own UI](${docs('/guides/custom-ui.md')}): the headless hooks
- [FAQ](${docs('/resources/faq.md')})

## Optional

- [Full docs index](${docs('/llms.txt')}): every docs page
- [Full docs as one file](${docs('/llms-full.txt')})
- [Source on GitHub](${githubUrl})
- [Package on npm](${npmUrl})
- [Website](${siteUrl})
`;

export const dynamic = 'force-static';

export function GET() {
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
