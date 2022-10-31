const express = require('express');

const api = express();

const port = process.env.PORT || 2000

api.get('/', (req,res) => {
    res.json({"slackUsername": "Ang_Elo", "backend": true, "age": 25, "bio": "an aspiring web developer"})
});

api.listen(port, () => {console.log(`API running at http://localhost:${port}`)});
