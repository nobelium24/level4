import express, {Application} from "express";
import { connectToDB } from "./database/database";

const app: Application = express()


connectToDB().then(()=>{
    app.listen(5000, ()=>{
        console.log("Server started")
    })
}).catch((error)=>{
    console.log(`Error: ${error}`)
})

