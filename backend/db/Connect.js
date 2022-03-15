const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    const result = await mongoose.connect("mongodb://localhost/newsAppDaris");
    console.log("Connected to MongoDB...");
  } catch (error) {
    console.error(error);
  }
};

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  primaryLanguage: { type: String },
  password: { type: String },
  residenceCountry: { type: String },
  otherLanguages: [],
  favouriteTopics: [],
  favouriteCountries: [],
  newsBookmarks: [],
});

const User = mongoose.model("User", userSchema);

const createNewUser = async (user) => {
  const newUser = new User(user);
  const result = await newUser.save();
  console.log(result);
};

const findUser = async (user) => {
  const result = await User.findOne(user);
  return result;
};

module.exports = { createNewUser, findUser, connectToDb };
