const express = require("express");
const app = express();
const memberRoutes = express.Router();

let Member = require("../models/Member");

// Dpost data route
memberRoutes.route("/add").post(function (req, res) {
  let member = new Member(req.body);
  member.save(function (err, member) {
    if (err) {
      res.status(400).send("unable to save to database");
    } else {
      res.status(200).json(`${member.MemberName} has been added successfully`);
    }
  });
});

// get data route
memberRoutes.route("/").get(function (req, res) {
  Member.find(function (err, members) {
    if (err) {
      console.log(err);
    } else {
      res.json(members);
    }
  });
});

// edit route
memberRoutes.route("/edit/:id").get(function (req, res) {
  let id = req.params.id;
  Member.findById(id, function (err, member) {
    res.json(member);
  });
});

//  update route
memberRoutes.route("/update/:id").post(function (req, res) {
  Member.findById(req.params.id, function (err, member) {
    if (!member) res.status(404).send("Record not found");
    else {
      member.MemberName = req.body.MemberName;
      member.MemberBio = req.body.MemberBio;
      member.MemberAge = req.body.MemberAge;

      member.save(function (err, member) {
        if (err) {
          res.status(400).send("unable to update the database");
        } else {
          res.status(201).send(`Update complete`);
        }
      });
    }
  });
});

// delete route
memberRoutes.route("/delete/:id").get(function (req, res) {
  Member.findByIdAndRemove({ _id: req.params.id }, function (err, member) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = memberRoutes;
