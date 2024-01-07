const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      created_at: {
        type: Date,
        default: Date.now
      }
});

const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;