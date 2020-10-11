const express = require('express');
const app = express();
module.exports = app;

var path = require('path');

//port will look for the heroku deploy or locally on port 9000
// port = process.env.PORT || 8080;


// app.listen(port, function(){
//     console.log('Application is listening on 8080')
// });

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
  console.log('Application is running')
}
app.listen(port);