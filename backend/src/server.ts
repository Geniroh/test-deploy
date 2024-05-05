import express, { Request, Response } from 'express';
const app = express();

const PORT: number = Number(process.env.PORT) || 8080

import authRouter from './routes/auth';
app.use("/auth", authRouter);

app.get("/", (req:Request, res:Response) => {
    res.send("Hello World... 2");
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})



