import express from 'express'
const app =  express()
const PORT = 3500
import cors from 'cors'
import routes from './modules/routes.js'
import fetch from 'node-fetch'


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

global.fetch = fetch;

app.get('/', (req,res) => {
    res.send('app')
})
app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Express listening on port ${PORT}`)
})