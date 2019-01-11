const express = require('express');
const projectModel = require('./data/helpers/projectModel.js');
const testCharLimit = require('./testCharLimit');

const router = express.Router();

router.get('/', (req, res, next) => {

  projectModel.get()
  .then(projects => {
    res.status(200).json(projects);
  })
  .catch(err => res.status(500).json({message: 'error'}))
  
})

router.get('/:id', (req, res, next) => {

  const {id} = req.params;
  projectModel.get(id)
  .then(projects => {
    res.status(200).json(projects);
  })
  .catch(err => res.status(500).json({message: 'error'}))
  
})

router.post('/', testCharLimit, (req, res, next) => {

  console.log('here?')

  const {name, description, completed} = req.body;
  description = description ? description : '';

  projectModel.insert({name, description, completed})
  .then(project => {
    res.status(201).json(project);
  })
  .catch(err => next(err))

})

module.exports = router;