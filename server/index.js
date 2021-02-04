const express = require('express')
const app = express()
const PORT = 3500
const cors = require('cors')
const router = require('./modules/index.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.send('app')
})
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Express listening on port ${PORT}`)
})