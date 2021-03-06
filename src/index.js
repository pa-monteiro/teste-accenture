const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const port =  process.env.PORT || 3000;
app.listen(port);