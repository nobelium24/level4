import { Sequelize } from "sequelize";
import { DB_NAME, DIALECT, HOST, PASSWORD, PORT, USERNAME } from "../utils";

console.log(DB_NAME, DIALECT, HOST, PASSWORD, PORT, USERNAME)


export const connectToDB = async () => {
    try{
        const sequelize = new Sequelize(DB_NAME, USERNAME, PASSWORD, {
            port: PORT,
            host: HOST,
            dialect: DIALECT
        })
    
        const authenticate = await sequelize.authenticate()
        console.log("Database connection successful")
    }catch(error){
        console.log("Database connection was not successful", error)
    }
}


