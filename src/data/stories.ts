// Original graded stories (written by the local AI, reviewed by hand). Pinyin per word comes from pinyin-pro at merge time.
export interface StoryToken { w: string; p: string }
export interface StorySentence { zh: string; en: string; ru: string; tokens: StoryToken[] }
export interface Story {
  id: string;
  level: 1 | 2 | 3;
  title: { zh: string; en: string; ru: string };
  sentences: StorySentence[];
  questions: { q: string; options: string[]; answer: number }[];
}

export const stories: Story[] = [];
