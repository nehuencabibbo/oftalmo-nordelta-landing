# Oftalmo Nordelta Landing Page

This is the Landing Page for Oftalmo Nordelta Oftalmology Clinic.

![Oftalmo Nordelta Landing Page Desktop View](readme/desktop.png)

<div align="center">
  <img src="readme/mobile.png" alt="Oftalmo Nordelta Landing Page Mobile View" width="300" />
</div>

## Site

The site can be accessed by going to [https://oftalmonordelta.com](https://oftalmonordelta.com/)

## Dependencies

- Node 22.17.0
- Shadcn (Just for the Accordion)
- Lucide React
- Tailwind V4

## Run

Add the githooks for formatting

```bash
./setup-hooks.sh
```

Install the dependencies

```bash
npm i
```

Run locally for development

```bash
npm run dev
```

## Build

Build for deploy

```bash
npm run build
```

## Git Hooks

This repository includes a pre-push hook that automatically runs `npm run fmt` (Prettier formatting) before every push.

### Setup (First Time Only)

**On Linux/Mac:**

```bash
./setup-hooks.sh
```

**On Windows:**

```bash
setup-hooks.bat
```

Or manually:

```bash
git config core.hooksPath .githooks
```

The hook will:

- Run Prettier formatting before each push
- Warn you if formatting changes were made
- Require you to commit the formatting changes before pushing
