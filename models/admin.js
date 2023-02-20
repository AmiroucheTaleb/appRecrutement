const mongoose = require("mongoose");
const User = require("./user");

const adminSchema = new mongoose.Schema({});

const admin = User.discriminator("admin", adminSchema);

module.exports = admin;
