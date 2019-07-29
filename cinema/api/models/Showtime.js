/**
 * Showtime.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    numberOfSeats:{
      type:'number',
      required:true
    },
    movie:{
      model:'movie'
    }

  },

};

