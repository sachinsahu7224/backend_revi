import express from 'express';
 import cors from 'cors';
 import cookieParser from 'cookie-parser';
    const app = express()
    app.use(cors(
        {
            origin: process.env.CORS_ORIGIN || '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
            credentials: true,
        }
    ))
    app.use(express.json({ limit: '10kb' }))
app.use(urlencoded({ extended: true }))

app.use(cookieParser())
app.use(express.static('public'))




    export { app }