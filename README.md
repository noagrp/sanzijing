# 三字经

A section-by-section reading and explanation app for the Chinese classic primer 《三字经》.

## Base text
The original text in V1 follows the Wikisource transcription of 《三字经释句》, whose page states that the text comes from a Chinese University of Hong Kong Library holding.

《三字经》 has historical textual variants, especially later dynastic continuations after the Song period. This project deliberately identifies its base text instead of silently mixing multiple editions.

## Architecture
- `data/sanzijing.json` — original text, explanations, vocabulary and cultural notes
- `src/sanzijing-engine.js` — reusable navigation/search engine
- `index.html` — reader UI

Original text is kept in Traditional Chinese to respect the selected source text. Explanations are newly written in Simplified Chinese.
