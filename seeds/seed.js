import State from "../models/dpt/State.js";
import Municipality from "../models/dpt/Municipality.js";
import Parish from "../models/dpt/Parish.js";
import { States } from "./data/dpt/estados.js"
import { Parishes } from "./data/dpt/parish.js"
import { Municipalities } from "./data/dpt/municipaly.js"
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

try {
  mongoose.connect(process.env.MONGO_URL)
  console.log('Connected to the database')

  //borro todas las colecciones
  await State.deleteMany({})
  await Municipality.deleteMany({})
  await Parish.deleteMany({})

  console.log('Collections reset successfully (all documents deleted)!')

  //inserto los datos
  await State.insertMany(States)
  await Municipality.insertMany(Municipalities)
  await Parish.insertMany(Parishes)


} catch (error) {

  console.error('Error dropping collection:', error);

} finally {
  mongoose.disconnect()
  console.log('Disconnected from database')
}