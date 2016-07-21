var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

/*DEV Settings: */
if (process.env.NODE_ENV !== 'production') {
  console.log('Using dev settings...');

  app.use(express.static(__dirname + '/static'));
  console.log('Root of project, index.html, located at ' + __dirname + '/index.html');

  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');

  var config = require('./webpack.config');
  var compiler = webpack(config);
  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));

  app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html')
  });
}
else{
  console.log('Using production settings...');
  console.log('Root of project, index.html, located at ' + __dirname + '/public/index.html');

  app.use(express.static(__dirname + '/public'));

  app.get('/', function(request, response) {
    response.sendFile(__dirname + '/public/index.html')
  });
}

app.listen(app.get('port'), function(error) {
  if (error){
    console.log(error)
  }
  else{
    console.log(' ==> 🌎 Node app is running on port', app.get('port'));
  }
});
