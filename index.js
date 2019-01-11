const express = require('express');

const server = express();

server.listen(8000, () => {
  console.log('Server live, listening on port 8000')
})