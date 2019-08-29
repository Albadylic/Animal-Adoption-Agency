const animalRequest = require("../model/queries/getData");

const getAdoptions = animalRequest.getAdoptions;

exports.get = (req, res) => {
  getAdoptions("Gregor", (err, result) => {
    res.render("profile", {
      activePage: { profile: true },
      animals: result
    });
  });
};
