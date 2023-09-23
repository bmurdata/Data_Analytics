import express from 'express'
import dataToolRouter from './routes/dataTools.js'
const app=express()


app.use('/public',express.static('./public'))
app.use('/scripts',express.static('./public/scripts'))

app.use('/dataTools',dataToolRouter)
app.get('/',(req,res)=> {
    res.status(200).send('<h1 style="text-align: center;margin-top:50px;">UnEarthed API</h1>')
})

const PORT =process.env.PORT || 3001

app.listen(PORT,()=>{
    console.log(`Server Started on port ${PORT}`)
})
