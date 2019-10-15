/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var _ = require('lodash');


module.exports = {
  async signup(req, res){
    try {
      const data = req.body;
      const user = await User.create(data).fetch();
      const t =_.omit(req.body,['password']);

      return res.send({ status: 201, message: 'User created Successfully', user , token: jwToken.issue({ id: user.id })});


    }
    catch(err){
      console.log(err);

      return res.send({status: 400, error : err});
    }
  },


  //find a user in
  async login(req, res){

    try {
      const data = req.body;

      const user = await User.findOne({email: data.email, password: data.password}).populate('movie',);
      if (!user) {
        return res.send({ status: 404, message: 'User not found'});
      }

      return res.send({ status: 201, message: 'Login Successful', user , token: jwToken.issue({ id: user.id })});


    }
    catch(err){
      console.log(err);
      return res.send({ status: 400, message: 'Error while logging in', error: err});
    }

  },


 


  //update a user
  async update(req, res){
    try {
      const data = req.body;
      const criteria = {
        id: req.params.id
      };

      const user = await User.update(criteria,data).fetch();

      if (!user.length) {
        return res.send({ status: 404, message: 'User not found'});
      }
      return res.send({ status: 200, message: 'User updated Successfully', user});
    }
    catch(err){
      console.log(err);
      return res.send({ status: 400, message: 'Error while updating user', error: err});
    }



  },

  //delete a user
  async delete(req, res){

    try {
      const data = req.body;
      const criteria = {
        id: req.params.id
      };

      const user = await User.destroy(criteria,data).fetch();

      // if (!user.length) {
      //     return res.send({ status: 404, message: 'User not found'});
      // }
      return res.send({ status: 200, message: 'user deleted Successfully', user});
    }
    catch(err){
      console.log(err);

      return res.send({ status: 400, message: 'Error while deleting user', error: err});
    }







  }


};

