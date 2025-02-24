import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import Participants from './routes/ova.routes.js'
import Dpt from'./routes/dpt.routes.js'

dotenv.config()
const app = express()

const corsOptions = {
    origin: process.env.FRONT_URL,
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(morgan("common"));
app.use(express.json());
app.use(helmet());

const connectToMongo = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to Mongo Successfully!");
    } catch (error) {
        console.log(error);
    }
};
connectToMongo()

app.use("/api", Participants);
app.use("/api", Dpt);


app.listen(process.env.PORT || 8800, () => {
    console.log("Backend server is running on port", process.env.PORT || 8800)
})