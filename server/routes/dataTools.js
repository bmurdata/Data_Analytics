import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'
// Import DB data
import DatatToolsController from '../controllers/dataTools.js'
// Import data from local file
//import dataTools from '../data/dataTools.js'

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
// Setup routes for the dataTool endpoint

const dataToolRouter=express.Router()
dataToolRouter.get('/',DatatToolsController.getDataTools)

// Serve datatools from local file
/*dataToolRouter.get('/',(req,res)=> {
    res.status(200).json(dataTools)
})*/
dataToolRouter.get('/:dataToolId',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname, '../public/dataTool.html'))
})

export default dataToolRouter