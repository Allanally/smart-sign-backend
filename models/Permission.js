const mongoose = require('mongoose');

const PermissionSchema = new mongoose.Schema({
    name: String,
    class: String,
    departDate: Date,
    departTime: String,
    returnDate: Date,
    returnTime: String,
    issuer: String,
    reason: String,
})


const PermissionModel = mongoose.model('permissions', PermissionSchema);
module.exports = PermissionModel;