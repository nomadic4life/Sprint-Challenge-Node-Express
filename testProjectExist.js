const projectModel = require('./data/helpers/projectModel.js');

const testProjectExist = (req, res, next) => {

  const {project_id} = req.body;
  
  projectModel.get(project_id)
  .then(() => {
    next()
  })
  .catch(err => res.status(400).json({errorMessage: `Invalid Project Id. Please submit a valid Project Id`}))
}


module.exports = testProjectExist;