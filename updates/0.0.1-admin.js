/**
 * Created by janfanslau on 11.05.15.
 */
var keystone = require('keystone'),
  User = keystone.list('User');


exports = module.exports = function(done){

  new User.model({
    name : {first:'Jan', last:'Fanslau'},
    email:'jan@falsanu.de',
    password:'admin',
    canAccessKeystone:true
  }).save(done);

};