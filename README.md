# Wordle Clone

A front-end clone of the popular word-guessing game **Wordle**, built with React and Vite.

Guess the hidden 5-letter word in 6 tries. After each guess, each tile is
colored to show how close the guess was:

- **Green** — correct letter, correct position
- **Yellow** — correct letter, wrong position
- **Gray** — letter is not in the word

## Features

- Classic Wordle gameplay (6 attempts, 5-letter words)
- On-screen keyboard that reflects each letter's guess status
- Win/lose modal with attempt count and the correct answer
- "Feeling Stuck?" hover card to reveal the answer for practice
- Local word bank — no backend required

## Tech Stack

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/)
- [MUI (Material UI)](https://mui.com/) for the modal component

## Getting Started

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Build

```bash
npm run build
```

## Deployment

This project is configured for [Netlify](https://www.netlify.com/) via `netlify.toml`
(build command `npm run build`, publish directory `dist`).

## Disclaimer

All copyrights and logos belong to Wordle / The New York Times. This project is
built solely as a portfolio piece and is not affiliated with the original game.
