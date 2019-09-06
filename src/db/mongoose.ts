import mongoose from 'mongoose'
const uri = "mongodb://localhost:27017/whitepanda"
mongoose.connect(uri, {useNewUrlParser: true});
mongoose.set('useCreateIndex', true)

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connection done")
});

