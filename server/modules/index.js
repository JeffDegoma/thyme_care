const express = require('express')
const router = express.Router()


router.post('/api/form/signup', (req,res) => {
    console.log(req.body.firsName)
})


module.exports = router;