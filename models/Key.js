const mongoose = require('mongoose');
const keySchema = new mongoose.Schema({
    keyValue: String
});
module.exports = mongoose.model('Key', keySchema);
