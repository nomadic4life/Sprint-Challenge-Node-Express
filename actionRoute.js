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

router.post('/', testCharLimit, (req, res, next) => {

  console.log('here?' )

  let {project_id, description, notes, completed} = req.body;
  description = description ? description : '';

  actionModel.insert({project_id, description, notes, completed})
  .then(project => {
    res.status(201).json(project);
  })
  .catch(err => res.status(500).json(err));

})
module.exports = router;