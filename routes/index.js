/**
 * Created by janfanslau on 11.05.15.
 */
var keystone = require('keystone'),
  middleware = require('./middleware'),
  importRoutes = keystone.importer(__dirname);


// common Middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);


// Handle 404 errors
keystone.set('404', function(req, res, next){
  res.notfound();
});


// Handle other errors
keystone.set('500', function(err, req, res, next){
  var title, message;
  if(err instanceof Error) {
    message = err.message;
    err = err.stack;
  }
  res.err(err, title, message);
});

// Load routes
var routes = {
  views:importRoutes('./views')
}


//Bind routes

exports = module.exports = function(app) {
  app.get('/', routes.views.index);
  app.get('/styleguide', routes.views.styleguide);
}






