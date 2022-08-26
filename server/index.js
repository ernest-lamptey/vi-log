const express = require('express');
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json()); //req.body

app.get("/", (req, res) => {
    res.send(req.body);
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
