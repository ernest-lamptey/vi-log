const express = require('express');
const path = require('path');
const cors = require('cors');
const visitorRouter = require('./visitors/visitorRouter');
const adminRouter = require('./admin/adminRouter');

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json()); //req.body

if (process.env.NODE_ENV === "production") {
    app.use(express.static('../client/build'))
}

app.use('/visitors', visitorRouter);
app.use('/admin', adminRouter);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
