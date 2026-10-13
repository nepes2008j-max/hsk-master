"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Lang = "en" | "ru" | "tk";

const t = {
  en: {
    langName: "English",
    chooseLang: "Choose your language",
    continue: "Continue",
    home: "Home",
    vocab: "Vocab",
    grammar: "Grammar",
    hanzi: "Hanzi",
    dict: "Dict",
    cards: "Cards",
    test: "Test",
    settings: "Settings",
    dashboard: {
      title: "HSK 1",
      subtitle: "学习",
      streak: "streak",
      vocabulary: "Vocabulary",
      grammarLabel: "Grammar",
      characters: "Characters",
      vocabDesc: "300 HSK 1 words",
      grammarDesc: "58 grammar points",
      charsDesc: "Stroke order practice",
      dictDesc: "430+ words by topic",
      cardsDesc: "SRS review & custom decks",
      testDesc: "HSK 1 practice exam",
    },
    vocabPage: {
      title: "HSK 1 Vocabulary",
      search: "Search words...",
      markLearned: "Mark as learned",
      learned: "Learned",
      example: "Example",
    },
    grammarPage: {
      title: "Grammar Points",
      all: "All",
    },
    charsPage: {
      title: "Characters",
      animate: "Animate",
      quiz: "Quiz",
      practiced: "practiced",
    },
    dictPage: {
      title: "Dictionary",
      words: "words",
      allTopics: "All topics",
      searchPlaceholder: "Search Chinese, pinyin, or English...",
    },
    cardsPage: {
      review: "Review",
      decks: "Decks",
      create: "Create",
      front: "Front (Chinese)",
      back: "Back (meaning)",
      pinyin: "Pinyin (optional)",
      addCard: "Add card",
      newDeck: "New deck",
      noCards: "No cards due for review",
      showAnswer: "Show answer",
      again: "Again",
      hard: "Hard",
      good: "Good",
      easy: "Easy",
      reviewDeck: "Review this deck",
      delete: "Delete",
    },
    testPage: {
      title: "HSK Mock Test",
      startTest: "Start test",
      submit: "Submit Test",
      prev: "Previous",
      next: "Next",
      score: "Score",
      passed: "Passed",
      failed: "Failed",
      reviewAnswers: "Review answers",
      tryAgain: "Try again",
      listening: "Listening",
      reading: "Reading",
    },
    settingsPage: {
      title: "Settings",
      uiMode: "UI Mode",
      gamified: "Gamified",
      clean: "Clean",
      stats: "Statistics",
      wordsLearned: "Words learned",
      grammarDone: "Grammar done",
      charsPracticed: "Chars practiced",
      language: "Language",
    },
    landing: {
      hero: "Pass your HSK 1 exam.",
      heroSub: "Without the fluff.",
      cta: "Start learning",
      viewPricing: "View pricing",
      simplePricing: "Simple pricing",
      pricingDesc: "One plan. Everything included. Pick the duration that works for you.",
      getStarted: "Get started",
      everyPlan: "Every plan includes:",
      readyToStart: "Ready to start?",
      readyDesc: "Most people pass HSK 1 in 2-4 months of daily practice. Start today.",
      startTrial: "Start your free trial",
    },
  },
  ru: {
    langName: "Русский",
    chooseLang: "Выберите язык",
    continue: "Продолжить",
    home: "Главная",
    vocab: "Слова",
    grammar: "Грамм.",
    hanzi: "Иероглифы",
    dict: "Словарь",
    cards: "Карточки",
    test: "Тест",
    settings: "Настройки",
    dashboard: {
      title: "HSK 1",
      subtitle: "学习",
      streak: "серия",
      vocabulary: "Словарный запас",
      grammarLabel: "Грамматика",
      characters: "Иероглифы",
      vocabDesc: "300 слов HSK 1",
      grammarDesc: "58 грамматических правил",
      charsDesc: "Практика написания",
      dictDesc: "430+ слов по темам",
      cardsDesc: "Интервальное повторение",
      testDesc: "Пробный экзамен HSK 1",
    },
    vocabPage: {
      title: "Словарь HSK 1",
      search: "Поиск слов...",
      markLearned: "Отметить как изученное",
      learned: "Изучено",
      example: "Пример",
    },
    grammarPage: {
      title: "Грамматика",
      all: "Все",
    },
    charsPage: {
      title: "Иероглифы",
      animate: "Анимация",
      quiz: "Тест",
      practiced: "изучено",
    },
    dictPage: {
      title: "Словарь",
      words: "слов",
      allTopics: "Все темы",
      searchPlaceholder: "Поиск по китайскому, пиньинь или русскому...",
    },
    cardsPage: {
      review: "Повторение",
      decks: "Колоды",
      create: "Создать",
      front: "Лицевая (китайский)",
      back: "Обратная (значение)",
      pinyin: "Пиньинь (необязательно)",
      addCard: "Добавить карточку",
      newDeck: "Новая колода",
      noCards: "Нет карточек для повторения",
      showAnswer: "Показать ответ",
      again: "Ещё раз",
      hard: "Сложно",
      good: "Хорошо",
      easy: "Легко",
      reviewDeck: "Повторить колоду",
      delete: "Удалить",
    },
    testPage: {
      title: "Пробный тест HSK",
      startTest: "Начать тест",
      submit: "Сдать тест",
      prev: "Назад",
      next: "Далее",
      score: "Результат",
      passed: "Сдано",
      failed: "Не сдано",
      reviewAnswers: "Разбор ответов",
      tryAgain: "Попробовать снова",
      listening: "Аудирование",
      reading: "Чтение",
    },
    settingsPage: {
      title: "Настройки",
      uiMode: "Режим интерфейса",
      gamified: "Игровой",
      clean: "Простой",
      stats: "Статистика",
      wordsLearned: "Слов изучено",
      grammarDone: "Грамматика",
      charsPracticed: "Иероглифов",
      language: "Язык",
    },
    landing: {
      hero: "Сдайте экзамен HSK 1.",
      heroSub: "Без лишнего.",
      cta: "Начать обучение",
      viewPricing: "Цены",
      simplePricing: "Простые цены",
      pricingDesc: "Один план. Всё включено. Выберите удобный срок.",
      getStarted: "Начать",
      everyPlan: "Каждый план включает:",
      readyToStart: "Готовы начать?",
      readyDesc: "Большинство сдают HSK 1 за 2-4 месяца ежедневной практики. Начните сегодня.",
      startTrial: "Начать бесплатный период",
    },
  },
  tk: {
    langName: "Türkmen",
    chooseLang: "Diliňizi saýlaň",
    continue: "Dowam et",
    home: "Baş sahypa",
    vocab: "Sözler",
    grammar: "Gramm.",
    hanzi: "Ieroglifler",
    dict: "Sözlük",
    cards: "Kartlar",
    test: "Synag",
    settings: "Sazlamalar",
    dashboard: {
      title: "HSK 1",
      subtitle: "学习",
      streak: "yzygider",
      vocabulary: "Söz baýlygy",
      grammarLabel: "Grammatika",
      characters: "Ieroglifler",
      vocabDesc: "300 HSK 1 söz",
      grammarDesc: "58 grammatiki düzgün",
      charsDesc: "Ýazyş tertibi türgenligi",
      dictDesc: "430+ söz mowzuk boýunça",
      cardsDesc: "Gaýtalama we öz kartlaryňyz",
      testDesc: "HSK 1 synag ekzameni",
    },
    vocabPage: {
      title: "HSK 1 Söz baýlygy",
      search: "Söz gözle...",
      markLearned: "Öwrenilen diýip belläň",
      learned: "Öwrenildi",
      example: "Mysal",
    },
    grammarPage: {
      title: "Grammatika",
      all: "Hemmesi",
    },
    charsPage: {
      title: "Ieroglifler",
      animate: "Animasiýa",
      quiz: "Synag",
      practiced: "türgenleşildi",
    },
    dictPage: {
      title: "Sözlük",
      words: "söz",
      allTopics: "Ähli mowzuklar",
      searchPlaceholder: "Hytaýça, pinýin ýa-da türkmençe gözle...",
    },
    cardsPage: {
      review: "Gaýtalama",
      decks: "Toplumlar",
      create: "Döret",
      front: "Öňi (hytaýça)",
      back: "Yzky (manysy)",
      pinyin: "Pinýin (hökmany däl)",
      addCard: "Kart goş",
      newDeck: "Täze toplum",
      noCards: "Gaýtalamak üçin kart ýok",
      showAnswer: "Jogaby görkez",
      again: "Ýene",
      hard: "Kyn",
      good: "Gowy",
      easy: "Aňsat",
      reviewDeck: "Bu toplumy gaýtala",
      delete: "Poz",
    },
    testPage: {
      title: "HSK synag testi",
      startTest: "Synaga başla",
      submit: "Synag tabşyr",
      prev: "Yza",
      next: "Öňe",
      score: "Netije",
      passed: "Geçdi",
      failed: "Geçmedi",
      reviewAnswers: "Jogaplary seret",
      tryAgain: "Täzeden synanyş",
      listening: "Diňleme",
      reading: "Okama",
    },
    settingsPage: {
      title: "Sazlamalar",
      uiMode: "Interfeýs režimi",
      gamified: "Oýunly",
      clean: "Ýönekeý",
      stats: "Statistika",
      wordsLearned: "Öwrenilen sözler",
      grammarDone: "Grammatika",
      charsPracticed: "Ieroglifler",
      language: "Dil",
    },
    landing: {
      hero: "HSK 1 ekzamenini tabşyryň.",
      heroSub: "Gereksiz zatlar bolmazdan.",
      cta: "Öwrenip başla",
      viewPricing: "Bahalar",
      simplePricing: "Ýönekeý bahalar",
      pricingDesc: "Bir plan. Hemmesi goşulan. Öz möhletiňizi saýlaň.",
      getStarted: "Başla",
      everyPlan: "Her plan öz içine alýar:",
      readyToStart: "Başlamaga taýynmy?",
      readyDesc: "Köp adamlar HSK 1-i 2-4 aýda gündelik türgenlik bilen tabşyrýarlar. Şu gün başlaň.",
      startTrial: "Mugt synag döwrüni başla",
    },
  },
} satisfies Record<string, Record<string, unknown>>;

type DeepString<T> = { [K in keyof T]: T[K] extends object ? DeepString<T[K]> : string };
export type Translations = DeepString<typeof t.en>;

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Translations }>({
  lang: "en",
  setLang: () => {},
  t: t.en,
});

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("hsk-lang") as Lang | null;
      if (saved && (saved === "en" || saved === "ru" || saved === "tk")) {
        setLangState(saved);
      }
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("hsk-lang", l); } catch {}
  };

  if (lang === null) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center px-4">
        <div className="w-full max-w-sm space-y-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-jade">HSK Master</div>
            <div className="text-[14px] text-ink-tertiary">汉语水平考试</div>
          </div>

          <div className="space-y-2">
            {(["en", "ru", "tk"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="w-full rounded-xl border border-border bg-bg-raised px-4 py-3.5 text-[15px] font-medium text-ink hover:border-jade hover:text-jade transition-colors"
              >
                {t[l].langName}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: t[lang] }}>
      {children}
    </LangContext.Provider>
  );
}
