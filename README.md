# HSK Master

Chinese language learning PWA focused on passing the HSK 1 exam.

## Features

- **300 Vocabulary Words** — Full HSK 3.0 Level 1 word list with pinyin, meanings, examples, and native pronunciation
- **58 Grammar Points** — Clear pattern explanations with real Chinese examples
- **Character Stroke Practice** — Animated stroke order demos and interactive writing quizzes (Hanzi Writer)
- **Smart Flashcards** — SM-2 spaced repetition with pre-built HSK 1 deck + custom user decks
- **Mock HSK Tests** — Realistic 40-question timed exams matching the official format (20 listening + 20 reading)
- **430+ Word Dictionary** — Comprehensive vocabulary across 24 real-life topics
- **Multi-language UI** — English, Russian (Русский), Turkmen (Türkmen)
- **Subscription Plans** — Monthly (¥30), 6-Month (¥150), Annual (¥250)

## Tech Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 with custom design tokens
- IndexedDB (via `idb`) for local-first storage
- Hanzi Writer for stroke order animation
- Web Speech API for Chinese TTS
- PWA with manifest and offline support

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/           # Pages (dashboard, vocab, grammar, characters, dict, cards, test, settings, legal)
├── components/    # Nav, AppShell, Icons, ProgressBar, LangWrapper
├── data/          # vocabulary.ts (300 words), grammar.ts (58 points), dictionary.ts (433 words)
├── hooks/         # useProgress
└── lib/           # storage (IndexedDB), srs (SM-2), tts (Web Speech), i18n (translations)
```

## License

Proprietary. All rights reserved.
