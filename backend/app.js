const express = require('express');
const app = express();
const cors = require('cors');

const maids = require('./routes/maid');
const users = require('./routes/user');

app.use(cors());
app.use(express.json())
app.use('/api/v1/', maids);
app.use('/api/v1/users/', users);


module.exports = app;