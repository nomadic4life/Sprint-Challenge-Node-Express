const express = require('express');
const projectModel = require('./data/helpers/projectModel.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  projectModel.get()
  .then(projects => {
    res.status(200).json(projects);
  })
  .catch(err => res.status(500).json({message: 'error 500'}))
  
})

module.exports = router;