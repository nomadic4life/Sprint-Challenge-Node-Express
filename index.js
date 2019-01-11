const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const projectRoute = require('./projectRoute.js');
const actionRoute = require('./actionRoute.js');

const server = express();

server.use(cors(),morgan("short"),helmet());
server.use(express.json());
server.use('/projects', projectRoute);
server.use('/actions', actionRoute);

server.use((err, req, res) => {
  console.log('testing error here')
  res.status(500).json({message: 'request failed', err});
})

server.listen(8000, () => {
  console.log('Server live, listening on port 8000')
})