import app from "./app.js";
import { dbConnect } from "./db/connect.js";





dbConnect().then(()=>{
    try {
        app.listen(4000,()=>{
            console.log("serv is runn")
        })
    } catch (error) {
        console.log("serv note runn")
    }
})

