
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://camvaughn14:<!!Se2025!!>@myclass.ojmnwwv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


/*const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'myDatabase';

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
  if (err) throw err;

  const db = client.db(dbName);

  const user = {k
    username: 'myUsername',
    password: 'myPassword'
  };

  db.collection('users').insertOne(user, function(err, res) {
    if (err) throw err;
    console.log('User added to "users" collection.');
    client.close();
  });
});*/
