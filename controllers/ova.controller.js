import Participant from "../models/Participants.js";
import fs from "fs"


export const addParticipant = async (req, res) => {

  try {
    const participant = new Participant({ ...req.body })
    await participant.save()


    res.status(200).json("actividad creada exitosamente")
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
}


export const getDatabase = async (req, res) => {
    try {
  
      const documents = await Participant.find();
  
      //formateo los documentos en un array de arrays para carga mas rapida
      //esto no se esta usando
      const worksheetData = [
        // Header row (optional)
        Object.keys(documents[0] || {})
      ];
  
      worksheetData.push(...documents.map(doc => {
        return {
          ...doc._doc
        }
      }));
  
  
      //creo un nuevo json para pasarlo a excel con todos los campos
      const newdocs = documents.map(doc => {
        return {
          id: doc.id,
          ...doc._doc,
          
        }
      })
  
  
      let filename = `Database` + `_${new Date().toISOString().slice(0, 10)}.xlsx`;

      const filePath = `./files/dbs/${filename}`;
    
      // Ensure the directory exists
      if (!fs.existsSync('./files/dbs')) {
        fs.mkdirSync('./files/dbs', { recursive: true });
      }
  
      const worksheet = XLSX.utils.json_to_sheet(newdocs);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      XLSX.writeFile(workbook, filePath, { compression: true });
  
      res.download(filePath)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err);
    }
  }
  



