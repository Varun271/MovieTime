//author : Rutika Patel

const bcrypt = require("bcrypt");
const userModel = require("../model/userModel");
const sessionModel = require("../model/sessionModel");
const e = require("express");

const getCurrentUser = async (req, res) => {
  console.log(req.session.email);
  try {
    if (req.session.email) {
      const user = await userModel.find({ email: req.session.email });
      res.json(user);
    } else {
      res.json({ message: false });
    }
  } catch (err) {
    res.json({ message: err });
  }
};

const logout = async (req, res) => {
  try {
    console.log("before deleetd", req.session);
    if (req.session.email) {
      const users = await sessionModel.deleteOne({ email: req.session.email });
      delete req.session.email;
      console.log("after deleetd", req.session);
      res.json({ message: true });
    } else {
      res.json({ message: false });
    }
  } catch (err) {
    res.json({ message: err });
  }
};

const addUser = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const userSchema = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
      phone: req.body.phone,
    });
    const users = await userModel.find({ email: req.body.email });
    console.log(users);
    if (users.length > 0) {
      res.json({ message: false });
    } else {
      userSchema.save();
      res.json({ message: true });
    }
  } catch (err) {
    res.json({ message: err });
  }
};

const updateUser = async (req, res) => {
  try {
    const users = await userModel.updateOne(
      { email: req.session.email },
      { $set: { phone: req.body.phone, name: req.body.name } }
    );
    if (users.n === 1) {
      res.json({ message: true });
    } else {
      res.json({ message: false });
    }
  } catch (err) {
    res.json({ message: "Error updating the profile" });
  }
};

const checkLogin = async (req, res) => {
  try {
    const user = await userModel.find({ email: req.body.email });
    if (user.length > 0) {
      if (await bcrypt.compare(req.body.password, user[0].password)) {
        const sessioncheck = await sessionModel.find({ email: req.body.email });
        if (sessioncheck.length === 0) {
          const sessionStart = new sessionModel({
            email: req.body.email,
          });
          sessionStart.save();
        }
        req.session.email = req.body.email;
        res.json({ message: true });
      } else {
        res.json({ message: false });
      }
    } else {
      res.json({ message: "Wrong Email ID" });
    }
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports.addUser = addUser;
module.exports.checkLogin = checkLogin;
module.exports.getCurrentUser = getCurrentUser;
module.exports.logout = logout;
module.exports.updateUser = updateUser;
