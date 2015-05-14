/**
 * Created by janfanslau on 11.05.15.
 */

var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);

  view.render('styleguide');
}
