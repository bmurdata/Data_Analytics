import { pool } from "./database.js";
import './dotenv.js'
import dataTools from "../data/dataTools.js";

const createdataToolsTable=async ()=>{
    const createTableQuery=`
    DROP TABLE IF EXISTS dataTools;
    CREATE TABLE IF NOT EXISTS dataTools (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        pricePoint TEXT NOT NULL,
        audience VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        usefulFor TEXT NOT NULL,
        submittedBy TEXT NOT NULL,
        submittedOn TEXT NOT NULL
    )
    `
    try{
        const res =await pool.query(createTableQuery)
        console.log('dataTools table created')
    }
    catch (err){
        console.error('Error creating dataTools table',err)
    }
}
// Place dataTool data into dataTool table
const seeddataToolsTable=async () =>{
    await createdataToolsTable()
    // Add the following to the DB to ensure that the source is actually the Railway app and not a local file
    const nonLocalInsert='Insert INTO dataTools(name, pricePoint, audience, image, description, usefulFor,submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
    const NonLocalvalues=[
        'PostgreSQL',
        'Varies',
        'Data Engineers, Analysts, Database Administrators',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/240px-Postgresql_elephant.svg.png',
        'PostgreSQL is a free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance.',
        'Codepath Web103 course! It can be run locally, or via third party hosting services such as Railway.',
        'Brian Murphy',
        'Today'

    ]
    pool.query(nonLocalInsert,NonLocalvalues,(err,res)=>{
        if (err){
            console.error(` Error inserting default`,err)
            return
        }

        console.log(`Default item added!`)
    })
    dataTools.forEach((dataTool)=>{
        const insertQuery={
            text:'Insert INTO dataTools(name, pricePoint, audience, image, description, usefulFor,submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
        }

        const values = [
            dataTool.name,
            dataTool.pricePoint,
            dataTool.audience,
            dataTool.image,
            dataTool.description,
            dataTool.usefulFor,
            dataTool.submittedBy,
            dataTool.submittedOn
        ]

        pool.query(insertQuery,values,(err,res)=>{
            if (err){
                console.error(` Error inserting dataTool ${dataTool.id}`,err)
                return
            }

            console.log(`${dataTool.name} added!`)
        })

    })

}
seeddataToolsTable()