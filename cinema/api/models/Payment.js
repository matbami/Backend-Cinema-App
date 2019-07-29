/**
 * Payment.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    amount:{
      type:'string',
      
    },
    movie:{
      model:'movie'
    },
    numberOfSeats:{
      type:'number'
    },
   
    user:{
      model: 'user'

    }

  },

};

