![](./screenshot.png)

## Dependencies
  - [node.js](https://nodejs.org) `v7.9.0`
  - [npm](https://www.npmjs.com) `~5.3.0`

## Setup
```
npm install
```

## Running the app
- `npm start` will build assets and run the app at `http://127.0.0.1:5500/`
- `npm test` will run the jest test runner

## A couple of notes
- The current algorithm for generating the phonewords is expensive. I would refactor this to use a trie structure, generating it from a word list.
- I decided to not use redux for the FE app, due to the minimal amount of state in the app.
- I left out tests for the node routes, including the basic memory cache (which would be worth testing). I would normally use supertest to drive testing express endpoints.
- In a real app I wouldn't use in-memory caching, since it would be cleared every time the process restarts and wouldn't work across multiple processes. I would save each calculation to a db.
