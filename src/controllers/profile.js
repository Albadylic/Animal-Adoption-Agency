const animalRequest = require("../model/queries/getData");

const getAdoptions = animalRequest.getAdoptions;

exports.get = (req, res) => {
  const username = req.url.split("=")[1];
  getAdoptions(username, (err, result) => {
    res.render("profile", {
      activePage: { profile: true },
      animals: result,
      username: username
    });
  });
};
