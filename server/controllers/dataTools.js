// Perform CRUD operations

import { pool } from "../config/database.js";

const getDataTools=async(req,res)=>{
    try{
        const querydataTools=`SELECT * FROM dataTools;`
        const dbResults =await pool.query(querydataTools)
        console.log(`Number of items returned: ${dbResults.rows.length}`)

        res.status(200).json(dbResults.rows)


    }
    catch(err){
        console.error('Error with CRUD ops for pulling data',err)
        res.status(409).json({error:err.message})
    }
}

export default {
    getDataTools
}