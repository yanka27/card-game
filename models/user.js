const Model = require('./model.js');

class User extends Model {
    constructor(attributes = {}) {
        super('users', attributes);
    }
}

module.exports = User;