const { Schema, model } = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt-nodejs");
const boom = require("@hapi/boom");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    lowercase: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email"
    }
  },
  name: {
    type: String,
    default: null,
    require: true
  },
  password: {
    type: String,
    require: true,
    minlength: 2
  }
});

// Before save, hash password
userSchema.pre("save", function genPaswordHash(next) {
  const user = this;

  // Generate a salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(boom.serverUnavailable("Error creating salt"));
    }

    return bcrypt.hash(user.password, salt, null, (_err, hash) => {
      if (_err) {
        return next(boom.serverUnavailable("Error creating hash"));
      }

      user.password = hash;

      return next();
    });
  });
});

// Add method to userSchema to compare passwords
userSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  callback
) {
  bcrypt.compare(candidatePassword, this.password, (error, isMatch) => {
    if (error) {
      return callback(error);
    }

    return callback(null, isMatch);
  });
};

const User = model("user", userSchema);

module.exports = User;
