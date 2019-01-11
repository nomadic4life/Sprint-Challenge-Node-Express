const express = require('express');
const projectRoute = require('./projectRoute.js');
const actionRoute = require('./actionRoute.js');

const server = express();

server.use('/projects', projectRoute);
server.use('/actions', actionRoute);

server.listen(8000, () => {
  console.log('Server live, listening on port 8000')
})