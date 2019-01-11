const express = require('express');
const actionModel = require('./data/helpers/actionModel.js');
const testProjectExist = require('./testProjectExist.js');
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

router.post('/', testProjectExist, testCharLimit, (req, res, next) => {

  let {project_id, description, notes, completed} = req.body;
  description = description ? description : '';
  notes = notes ? notes : '';

  actionModel.insert({project_id, description, notes, completed})
  .then(project => {
    res.status(201).json(project);
  })
  .catch(err => res.status(500).json(err));

})

router.put('/', testProjectExist, testCharLimit, (req, res, next) => {

  let {project_id, description, notes, completed} = req.body;  

  actionModel.insert({project_id, description, notes, completed})
  .then(project => {
    res.status(201).json(project);
  })
  .catch(err => res.status(500).json(err));

})

router.delete('/:id', (req, res, next) => {
  const {id} = req.params;

  actionModel.remove(id)
  .then(count => {
    if(count) {
      res.status(204).end()
    } else{
      res.status(404).json({errorMessage: "delete could not be completed, id not found"})
    }
  })
})

module.exports = router;