/**
 * PaymentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// module.exports = {
//     async create(req, res){
//         try {
//             const data = req.body
//             const payment = await Payment.create(data).fetch()
//             return res.send({ status: 201, message: 'Payment made Successfully', payment });



//         }
//         catch(err){

//             return res.send({status: 400, error : err});

//         }

//     },


//     //find a user
//     async find(req, res){
//         try {



//         }
//         catch(err){

//         }

//     },


//     // list users
//     async list(req, res){
//         try {



//         }
//         catch(err){

//         }

//     },


//     //update a user
//     async update(req, res){
//         try {



//         }
//         catch(err){

//         }

//     },

//     //delete a user
//     async delete(req, res){
//         try {



//         }
//         catch(err){

//         }

//     }


// };

/**
 * PaymentController
 *
 * @description :: Server-side logic for managing payments
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {
  async create(req, res){
    try {
      const data = req.body;

      criteria = {
        id: data.movie
      };
      const movie = await Movie.findOne(criteria);
      const price = movie.basePrice;
      const intPrice = parseInt(price,10);
      console.log(intPrice);
      data.amount = intPrice * data.numberOfSeats;
      console.log(data.amount);
      const payment = await Payment.create(data).fetch();


      return res.send({ status: 201, message: 'Payment created successfully', payment });




    } catch (err) {
      console.log(err);
      return res.send({ status: 400, error: err});
    }
  },
  async read(req, res) {
    try {
      const criteria = {
        id: req.params.id,

      };

      const payment = await Payment.findOne(criteria).populate('user').populate('movie');

      if (!payment) {
        return res.send(404, 'Payment not found', null);
      }

      return res.send({ status: 201, message: 'Payment retrieved successfully', payment });
    } catch (err) {

      return res.send({status: 400, error : err});
    }
  },


};



