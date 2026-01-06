# Expo app 👋

## Steps for scaffolding.

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Troubleshooting: iOS & Expo Go 🔍

If your iPhone doesn’t open the project from Expo devtools or QR codes, try the checklist below.

### Quick checks ✅

- Make sure **Expo Go** is installed and **up to date** on the iPhone.
- Ensure your phone and computer are on the **same Wi‑Fi** network, or use **Tunnel** mode (see below).
- Grant **Local Network** permission: iPhone Settings → find **Expo Go** → **Local Network** must be enabled.
- For QR scanning, allow **Camera** permission or use the camera app to scan the QR code and open the link in Safari.

### Commands to try 🔧

- Install dependencies (run in project root):

```bash
npm install
# or if you prefer yarn
# yarn
```

- Start Expo (preferred):

```bash
npx expo start
# or to force tunnel (works well across subnets/corporate Wi‑Fi)
npx expo start --tunnel
# clear cache if you see weird errors:
npx expo start -c
```

- If the QR scan fails, copy the **Tunnel URL** from the devtools and open it in Safari on the iPhone — it should prompt to open in Expo Go.

### Network & firewall ⚠️

- Windows Firewall, corporate/NAT networks, or VPNs can block LAN connections. Try **Tunnel** mode if LAN fails.
- Ensure ports 19000 and 19001 aren't blocked if you're trying LAN mode.

### Common errors & fixes 🛠️

- “Module not found” after start: run `npm install` (or `npm ci` if you have a lockfile) and try again.
- Permission denied / EACCES on install: avoid running npm as admin; use a proper Node version or nvm to manage Node.
- Expo Go says a feature isn't available: some native modules require a **custom dev client** or an actual build (`eas build`). See Expo docs for development builds.

### When to ask for help 🙋‍♂️

If it still fails, paste the terminal output from `npx expo start`, the exact `npm install` output (errors/warnings), and a screenshot of devtools (QR + connection mode). I’ll help you debug further.

## Observations from the reset-project command.

When you run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
