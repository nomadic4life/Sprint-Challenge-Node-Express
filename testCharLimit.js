const testCharLimit = (req, res, next) => {
  console.log(req.baseUrl, req.originalUrl)

  const url = req.baseUrl;
  let name, description, character;

  if(url === '/actions') {
    const {project_id} = req.body
    console.log(project_id)
    if(project_id) {
      description = req.body.description;
      character = "description";
    } else {
      name = req.body.name;
      character = "name";
    }
  }

  if(url === '/projects') {
    name = req.body.name;
    character = "name";
  }

  test = name || description;

  if(test.length < 128) next();
  else res.status(400).json({errorMessage: `Exceeded 128 character limit for ${character}.` })
}

module.exports = testCharLimit;