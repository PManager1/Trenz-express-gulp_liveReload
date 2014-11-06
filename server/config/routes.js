
module.exports = function (app) {

  app.get('/partials/*', function (req, res) {
    res.render('../../output/app/' + req.params[0]);
  });


  app.get('*', function (req, res) {
    res.render('index');
  });

};





 