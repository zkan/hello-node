import express from 'express'
// const express = require('express')

const app = express()

// Signature of middleware in Express
// const m = f(req, res, next) => {

    // อยากให้จบ
    // return res.json(..)

    // อยากให้ไปต่อ
    // next()
// }

const myMiddleware = (req, res, next) => {
    console.log('Kan is here')

    // Send to next middleware - แปะไปแบบนี้เลย
    req.kan = "Hello"

    next()
}

const nextMiddleware = (req, res, next) => {
    console.log(req.kan)
    next()
}

const errorHandling = (req, res, next, err) => {
    res.status(500).json({ message: err.message })
}

app.use(myMiddleware)
app.use(nextMiddleware)

app.get('/', (req, res, next) => {
    next(new Error('error from'))
    res.json({ message: 'Hello World'})
})

app.use(errorHandling)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
