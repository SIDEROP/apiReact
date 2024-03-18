import express from "express";
import cors from "cors"
import userRoute from "./routes/user.routes.js"

let app = express()
app.use(express.json())
app.use(cors())


app.use("/v1",userRoute)


export default app