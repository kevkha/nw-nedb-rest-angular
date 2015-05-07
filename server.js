var
  express = require("express"),
  path = require("path"),
  nedb = require('nedb'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  databaseUrl = "db/contacts.db";

var db = {
  contacts: new nedb({ filename: databaseUrl, autoload: true })
};

var app = express();


app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/api', function (req, res) {
  res.send('REST API is running');
});

app.get('/contacts', function (req, res) {
  db.contacts.find({}, function(err, result) {
    res.send(result);
  });
});

app.post('/contacts', function (req, res) {
  var item = req.body;
  db.contacts.insert(item, function (err, result) {
    if (err) {
      res.send({'error':'An error has occurred'});
    } else {
      console.log('Success: ' + JSON.stringify(result));
      res.send(result);
    }
  });
});

app.delete('/contacts/:id', function (req, res) {
  var id = req.params.id;
  db.contacts.remove({_id: id}, {}, function (err, result) {
    if (err) {
      res.send({'error':'An error has occurred - ' + err});
    } else {
      console.log('' + result + ' contact(s) deleted');
      res.send(req.body);
    }
  });
});

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});