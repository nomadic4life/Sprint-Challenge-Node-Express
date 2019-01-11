const testCharLimit = (req, res, next) => {

  const { name, description } = req.body,
  test = name || description,
  character = name ? 'name' : 'description';

  if(test.length < 128) next();
  else res.status(400).json({errorMessage: `Exceeded 128 character limit for ${character}.` })
}

module.exports = testCharLimit;