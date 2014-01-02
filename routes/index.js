
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { appTitle: 'A New Startup: Sign Up Today!'});
};
