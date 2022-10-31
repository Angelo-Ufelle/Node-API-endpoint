const express = require('express')

const api = express()

const HOST = 'localhost'
const PORT = 5000

api.get('/', (req,res) => {
    res.json({"slackusername": "Ang_Elo", "backend": true, "age": 25, "bio": "an aspiring web developer"})
})

api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}`))