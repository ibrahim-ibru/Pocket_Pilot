import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import env from 'dotenv'

env.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api",)

