/**
 * Movie.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name:{
      type:'string',
      // required:true
    },
    rating:{
      type:'string',
      // required: true
    },
    movietype:{
      type:'string',
      // required:true
    },
    photo:{
      type:'string',
      
    },
    description:{
      type:'string',
      // required:true
    },
    starting:{
      type:'string',
      // required:true
    },
    starring:{
      type:'string',
      // required:true
    },
    basePrice:{
      type:'string',
    },
    user:{
      model: 'user'
    },
    
   
  }

};

