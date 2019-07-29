/**
 * Ticket.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
   
    payment:{
      model:'payment'
    },
    user:{
      model:'user'
    },
    movie:{
      model:'movie'
    }
  


    
  },

};

