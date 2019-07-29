// module.exports = (req, res, next) => {
//     let token;
  
  
//     if (req.headers && req.headers.token) {
//       token = req.headers.token;
//       if (token.length <= 0) return res.json(401, {err: 'Format is Authorization: Bearer [token]'});
  
//     } else if (req.param('token')) {
//       token = req.param('token');
//       // We delete the token from param to not mess with blueprints
//       delete req.query.token;
//     } else {
//       return res.json(401, {err: 'No Authorization header was found'});
//     }
  
//     jwToken.verify(token, function (err, token) {
//       if (err) return res.json(401, {err: 'Invalid Token!'});
//       req.token = token; // This is the decrypted token or the payload you provided
//       next();
//     });
//   };

module.exports = function (req, res, next) {
    let token;
  
    if (req.headers && req.headers.authorization) {
      var parts = req.headers.authorization.split(' ');
      if (parts.length == 2) {
        var scheme = parts[0],
          credentials = parts[1];
  
        if (/^Bearer$/i.test(scheme)) {
          token = credentials;
        }
      } else {
        return res.json(401, "Format is Authorization: Bearer [token]");
      }
    } else if (req.param('token')) {
      token = req.param('token');
  
      delete req.query.token;
    } else {
      return res.json(401, "No authorization header was found");
    }
  
    jwToken.verify(token, function(err, decoded){
      if (err) return res.json(401, "Invalid Token!");
      req.token = token;
      User.findOne({id: decoded.id}).then(function(user){
        req.current_user = user;
        next();
      })
    });
  
  }