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

router.get('/actions/:id', (req, res, next) => {

  // probably want to check if project id exist
  const {id} = req.params;

  projectModel.getProjectActions(id)
  .then(actionList => {
    res.status(200).json(actionList);
  })
  .catch(err => res.status(500).json(err));
})

router.post('/', testCharLimit, (req, res, next) => {

  let {name, description, completed} = req.body;
  description = description ? description : '';

  projectModel.insert({name, description, completed})
  .then(project => {
    res.status(201).json(project);
  })
  .catch(err => res.status(500).json(err));

})

router.put('/:id', testCharLimit, (req, res, next) => {

  const {id} = req.params;
  const {name, description, completed} = req.body;

  console.log( id, name, description,completed)

  // may be bug wit update method just returns empty object, doesn't indicate if updated was successful
  projectModel.update(id, {name, description, completed})
  .then(project => {
    if(projects){
      res.status(201).json(project);
    } else res.status(404).json({errorMessage: "project not found"})
  })
  .catch(err => res.status(500).json(err));

})

router.delete('/:id', (req, res, next) => {
  const {id} = req.params;

  projectModel.remove(id)
  .then(count => {
    if(count) {
      res.status(204).end()
    } else{
      res.status(404).json({errorMessage: "delete could not be completed, id not found"})
    }
  })
})

module.exports = router;