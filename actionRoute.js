const express = require('express');
const actionModel = require('./data/helpers/actionModel.js');
const testCharLimit = require('./testCharLimit');

const router = express.Router();

router.get('/', (req, res, next) => {

  actionModel.get()
  .then(actions => {
    res.status(200).json(actions);
  })
  .catch(err => res.status(500).json({message: 'error'}))
  
})

router.get('/:id', (req, res, next) => {

  const {id} = req.params;

  actionModel.get(id)
  .then(action => {
    res.status(200).json(action);
  })
  .catch(err => res.status(500).json({message: 'error'}))
  
})

module.exports = router;