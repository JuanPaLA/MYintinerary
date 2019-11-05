var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');

const cities = require('./routes/api/cities');
const itinerary = require('./routes/api/itineraries');

var app = express();

app.use(bodyParser.json());
app.use(cors());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//use routes
app.use('/api/cities', cities);
app.use('/api/itineraries', itinerary);

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server started on ${port}`));


// mongoose.connect('mongodb+srv://JPLA:14T1F1C11L@mindhub-h55xa.mongodb.net/MYintinerary?retryWrites=true&w=majority', { useNewUrlParser: true });

// var Schema = mongoose.Schema;

// var citySchema = new Schema({
//     name: String,
//     country: String
// }
// );

// var cityModel = mongoose.model('cities', citySchema);

// app.get('/test', function (req, res) {
//     res.send("HELLO WORLD");
// });

// app.get('/love', (req, res) => {
//     res.send('Hi Love');
// });

// app.get('/api/cities', cors(), function (req, res) {
//     cityModel.find(function (err, result) {
//         if (err) throw err;
//         if (result) {
//             res.json(result)
//         } else {
//             res.send(JSON.stringify({
//                 error: 'Error'
//             }))
//         }
//     })
//     /* .then(
//         function(datos){
//             return res.send(datos)
//         }
//     )
//     .catch(function(err) {
//         console.error(err)
//     }) */
// })




// app.listen(8080, function () {
//     console.log("Servidor escuchando puerto 8080");
// })