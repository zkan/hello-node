import express from 'express';
import { Memorize, noShuffle } from './memorize.js';
// import { app } from './app'
// const express = require('express')

import { getThemeById } from './db.js';

export const app = express();

// Signature of middleware in Express
// const m = f(req, res, next) => {

// อยากให้จบ
// return res.json(..)

// อยากให้ไปต่อ
// next()
// }

const myMiddleware = (req, res, next) => {
  console.log('Kan is here');

  // Send to next middleware - แปะไปแบบนี้เลย
  req.kan = 'Hello';

  next();
};

const nextMiddleware = (req, res, next) => {
  console.log(req.kan);
  next();
};

const errorHandling = (req, res, next, err) => {
  res.status(500).json({ message: err.message });
};

app.use(myMiddleware);
app.use(nextMiddleware);

app.get('/', (req, res, next) => {
  next(new Error('error from'));
  res.json({ message: 'Hello World' });
});

app.post('/games/theme/:id', async (req, res) => {
  try {
    // const theme = await prisma.theme.findUnique({
    //     where: {
    //         id: req.params.id
    //     }
    // })

    // ทำ layer กั้น Prisma
    const theme = await getThemeById(req.params.id);
    console.log(theme);

    const game = new Memorize(theme.emojis, noShuffle);
    res.json({ cards: game.cards });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use(errorHandling);
