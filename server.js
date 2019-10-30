var express=require('express');
var mongoose = require('mongoose');
var cors = require('cors');

var app=express();
mongoose.connect('mongodb+srv://JPLA:14T1F1C11L@mindhub-h55xa.mongodb.net/MYintinerary?retryWrites=true&w=majority', { useNewUrlParser: true });

var Schema = mongoose.Schema;

var citySchema = new Schema({
    name: String,
    country: String
}
);

var cityModel = mongoose.model('cities', citySchema);

app.get('/', function(req, res) {
    res.send("Yep it's working");
  });

  app.get('/love', (req, res) => {
    res.send('Hi Love');
  });

app.get('/api/cities', cors(), function (req, res) {
    cityModel.find(function (err, result) {
        if (err) throw err;
        if (result) {
            res.json(result)
        } else {
            res.send(JSON.stringify({
                error: 'Error'
            }))
        }
    })
    /* .then(
        function(datos){
            return res.send(datos)
        }
    )
    .catch(function(err) {
        console.error(err)
    }) */
})




app.listen(8080, function(){
    console.log("Servidor escuchando puerto 8080");
})