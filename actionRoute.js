const express = require('express');
const actionModel = require('./data/helpers/actionModel.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  actionModel.get()
  .then(actions => {
    res.status(200).json(actions);
  })
  .catch(err => res.status(500).json({message: 'error 500'}))
  
})

module.exports = router;