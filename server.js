import dotenv from 'dotenv'
import express from 'express'
import mongoose, {mongo} from 'mongoose'
import cors from "cors"
import workoutRoutes from './routes/todoRoutes.js'

//config
dotenv.config()
const app = express()
const PORT = process.env.PORT

// middleware
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Example app listening on port ${PORT}`)
        })
    })
    .catch(err => {
        console.log(err)
    })
