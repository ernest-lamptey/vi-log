const express = require('express');
const cors = require("cors");
const visitorRouter = require('./visitors/visitorRouter')

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json()); //req.body

app.use('/visitors', visitorRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
