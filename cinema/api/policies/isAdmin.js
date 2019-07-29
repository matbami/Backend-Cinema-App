/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
var _ = require('lodash');
module.exports = function(req, res, next) {
    if (_.includes(req.user.roles, 'admin')) {
        return next();
    }

    return res.json(401, 'You are not permitted to perform this action.');
};