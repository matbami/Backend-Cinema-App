/**
 * TicketController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async create(req, res){
    try {
      const data = req.body;
      const ticket = await Ticket.create(data).fetch();
      return res.send({ status: 201, message: 'Ticket generated Successfully', ticket });




    }
    catch(err){
      return res.send({status: 400, error : err});

    }

  },


  //find a user
  async find(req, res){
    try {

      const criteria = {
        id:req.params.id
      };

      const ticket = await Ticket.findOne(criteria).populate('payment').populate('user').populate('movie');
      if (!ticket) {
        return res.send(404, 'ticket not found', null);
      }
      return res.send({ status: 201, message: 'Ticket retrieved successfully', ticket });
    }
    catch(err){
      return res.send({status: 400, error : err});

    }

  },


  // list users
  async list(req, res){
    try {



    }
    catch(err){

    }

  },


  //update a ticket
  async update(req, res){
    try {



    }
    catch(err){

    }

  },

  //delete a ticket
  async delete(req, res){
    try {



    }
    catch(err){

    }

  }


};

