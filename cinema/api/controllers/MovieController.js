/**
 * MovieController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async create(req, res){
    try {
      const data = req.body;




      criteria = {
        id:data.user
      };




      const dad = await User.findOne(criteria);
      if(dad.isAdmin !== true){
        return res.send({  message: 'You are not permitted to perform this action' });


      }
      const movie = await Movie.create(data).fetch();

      return res.send({ status: 201, message: 'Movie added Successfully', movie });



    }
    catch(err){
      console.log(err);
      return res.send({status: 400, error : err});

    }

  },


  //find a user
  async find(req, res){
    try {

      const movie = await Movie.find();
      return res.send({ status: 201, message: 'Movie retrieved Successfully', movie });

    }
    catch(err){
      console.log(err);
      return res.send({status: 400, error : err});

    }

  },
  async findone (req, res){

    try {


      const criteria = {
        id:req.params.id
      };

      const movie = await Movie.findOne(criteria);
      console.log(movie);
      if (!movie) {
        return res.send({ status: 404, message: 'Movie not found'});
      }

      return res.send({ status: 201, message: 'Movie retrieved successfully', movie });


    }
    catch(err){
      console.log(err);
      return res.send({ error: err});
    }

  },


  // list users



  //update a user
  async update(req, res){
    try {
      const data = req.body;
      const criteria = {
        id: req.params.id
      };

      const movie = await Movie.update(criteria,data).fetch();
      if (!movie.length) {
        return res.send({ status: 404, message: 'Movie not found'});
      }
      return res.send({ status: 200, message: 'Movie updated Successfully', movie});




    }
    catch(err){
      console.log(err);
      return res.send({status: 400, error : err});
    }

  },

  //delete a user
  async delete(req, res){
    try {

      const criteria = {
        id: req.params.id
      };

      const movie = await Movie.destroy(criteria).fetch();

      // if (!user.length) {
      //     return res.send({ status: 404, message: 'User not found'});
      // }
      return res.send({ status: 200, message: 'Movie deleted Successfully', movie});
    }
    catch(err){
      console.log(err);

      return res.send({ status: 400, message: 'Error while deleting Movie', error: err});
    }
  }


};

