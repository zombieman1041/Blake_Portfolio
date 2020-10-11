const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 8000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
    response.render('index.html');
});

module.exports = app;

//port will look for the heroku deploy or locally on port 9000
// port = process.env.PORT || 8080;


// app.listen(port, function(){
//     console.log('Application is listening on 8080')
// });


app.listen(app.get('port'), function(){
    console.log('Node app is running on port', app.get('port'))
});