import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
const PORT = 3000 ||process.env.PORT

app.listen(PORT ,() => {
    console.log(`App is running on port ${PORT} `)
})