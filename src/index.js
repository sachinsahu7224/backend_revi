// src/index.js
import dotenv from "dotenv";
dotenv.config();   // <-- bas itna hi

import connectDB from "./db/index1.js";

connectDB()
.then(() => {
    application.listen( process.env.PORT || 8000 , ()  => {
        console.log( `Server is running on port ${process.env.PORT || 8000}` );
    } )
})  

.catch((error) => { 
    console.error("Failed to start application:", error);       
    process.exit(1);                            
}); 

// import express from "express";
// const app = express();

// const PORT = process.env.PORT || 8000;  




// ( async ()  => {
//     try {
//         await mongoose.connect( `${process.env.MONGODB_URL}/${DB_NAME}` )
//         app.on("error", (error) => {
//             console.error("Error connecting to MongoDB:", error);
//             throw error;
//         });
//         console.log("Connected to MongoDB")
//         app.listen( PORT , ()  => {
//     console.log( `Server is running on port ${PORT}` );
// } );
 
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error)
//         throw error;
//     }   
// })();