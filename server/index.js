const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const visitorRouter = require('./visitors/visitorRouter');
const adminRouter = require('./admin/adminRouter');

const app = express();
const PORT = process.env.PORT || 5000;

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

//middleware
app.use(cors());
app.use(express.json()); //req.body

if (process.env.NODE_ENV === "production") {
    app.use(express.static('../client/build'))
}

app.use('/visitors', visitorRouter);
app.use('/admin', adminRouter);

app.get('*', (req, res) => {
    console.log('outer route')
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
