/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var _ = require('lodash');

const bcrypt = require('bcrypt');


module.exports = {

  attributes: {

    firstName:{
      type: 'string',
      required: true

    },
    lastName:{
      type: 'string',
      required: true

    },
    email:{
      type: 'string',
      required:true,
      unique: true

    },
    age:{
      type:'number',
      required:true
    },
    password:{
      type:'string',
      required:true
    },
    mobile:{
      type:'number',
      required:true
    },
    roles:{
      type:'string',
      isIn: ['admin', 'user']
    },
    movie:{
      collection: 'movie',
      via: 'user'
    },
   isAdmin:{
     type: 'boolean',
     defaultsTo: false
   }
    
  },
  beforeCreate(values, next) {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            sails.log.error(err);
            return next();
        }

        bcrypt.hash(values.password, salt, (err, hash) => {
            if (err) {
                sails.log.error(err);
                return next();
            }
            values.encryptedPassword = hash; // Here is our encrypted password
            return next();
        });
    });
},

comparePassword(password, encryptedPassword) {

    return new Promise(function(resolve, reject) {
        bcrypt.compare(password, encryptedPassword, (err, match) => {
            if (err) {
                sails.log.error(err);
                return reject("Something went wrong!");
            }
            if (match) return resolve();
            else return reject("Mismatch passwords");
        });
    });
},
 
 
 

  
  validationMessages: {
    firstName: {
      required: 'First name is required',
    },
    email: {
      unique: 'Valid email is not uniqe',
    },
    organization: {
      required: 'Organization ID is required',
    },
  },

  
};

