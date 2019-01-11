const express = require('express');
const actionModel = require('./data/helpers/actionModel.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  next(new Error());
  actionModel.get()
  .then(actions => {
    res.status(200).json(actions);
  })
  .catch(err => next(err))
  
})

module.exports = router;