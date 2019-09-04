const test = require("tape");
const runDbBuild = require("../model/database/build");
const queries = require("../model/queries");

// Tape equals should follow pattern of (actual, expected, message)

test("Check table builds", t => {
  runDbBuild((err, res) => {
    t.error(err, "No error");
    t.end();
  });
});

test("Check getUsers function", t => {
  const users = [
    { name: "Gregor" },
    { name: "Andy" },
    { name: "Francesca" },
    { name: "Jack" }
  ];
  runDbBuild((err, res) => {
    t.error(err, "No error for DbBuild");
    queries.getData.getUsers((err, data) => {
      t.error(err, "No error for getUsers");
      t.deepEqual(data, users, "Correct names are returned");
      t.end();
    });
  });
});

test("Check getAnimals function", t => {
  const animals = [
    { name: "elephant" },
    { name: "octopus" },
    { name: "seal" },
    { name: "hippo" },
    { name: "monkey" },
    { name: "bison" },
    { name: "hamster" },
    { name: "llama" },
    { name: "panther" },
    { name: "platypus" },
    { name: "tortoise" },
    { name: "jellyfish" }
  ];

  runDbBuild((err, res) => {
    t.error(err, "No error for DbBuild");
    queries.getData.getAnimals((err, data) => {
      t.error(err, "No error for getAnimals");
      t.deepEqual(data, animals, "Correct animals are returned");
      t.end();
    });
  });
});

test("Check return all adopted relationships", t => {
  const adoptions = "tbd";

  runDbBuild((err, res) => {
    t.error(err, "No error for DbBuild");
    queries.getData.getAdoptions((err, data) => {
      t.error(err, "No error for getAdoptions");
      t.deepEqual(data, adoptions, "Correct adoptions are returned");
      t.end();
    });
  });
});
