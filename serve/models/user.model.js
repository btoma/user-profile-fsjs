// Load mongoose package
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  address: String,
  phone_number: String,
  created_at: { type: Date, default: Date.now },
});


const User = mongoose.model('User', UserSchema);
module.exports = User;


User.count({}, function(err, count) {
  if (err) {
    throw err;
  }

  if (count > 0) return ;

  const user = require('../../mock/users.json');
  User.create(user, function(err, newFiles) {
    if (err) {
      throw err;
    }
    console.log("DB seeded")
  });
});
