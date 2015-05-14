var keystone = require('keystone'),
  handlebars = require('express-handlebars');

keystone.init({

  'name': 'My Project',

  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],

  'views': 'templates/views',
  'view engine': 'hbs',

  'custom engine': handlebars.create({
    layoutsDir: 'templates/views/layouts',
    partialsDir: 'templates/views/partials',
    defaultLayout: 'default',
    helpers: new require('./templates/views/helpers')(),
    extname: '.hbs'
  }).engine,

  'auto update': true,
  'mongo': 'mongodb://localhost/jan-fanslau',

  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'asdf9ß09üpuaioe+#föd,hk32hasefup2398fhöqiakc'

});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();
